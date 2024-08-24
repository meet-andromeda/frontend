import {
  ReactFlow,
  Background,
  BackgroundVariant,
  MiniMap,
  useEdgesState,
  useNodesState,
  addEdge,
  Controls,
  Position,
  Handle,
  Connection,
  OnConnectStartParams,
  Edge,
} from '@xyflow/react';
import { Box, styled } from '@mui/material';
import { useCallback, useRef } from 'react';
import '@xyflow/react/dist/style.css';
import '../css/index.css';

const Container = styled('div')<{
  useCompletePage: boolean;
}>`
  width: ${(props) => (props.useCompletePage ? '100%' : '60%')};
  height: 90vh;
  border-right: 0.25rem solid #ddd;
`;

interface WorkflowMapProps {
  setNodeId: (id: string) => void;
}

interface NodeData {
  label: string;
}

interface CustomNodeProps {
  data: NodeData;
  id: string;
}

function WorkflowMap({
  setNodeId,
}: WorkflowMapProps): JSX.Element {
  const CustomNode = useCallback(({ id, data }: CustomNodeProps) => (
    <Box
      onClick={() => {
        setNodeId(id.toString());
      }}
      className="react-flow__node-default"
      style={{ cursor: 'pointer' }}
    >
      {data.label}
      <Handle type="target" position={Position.Top} className="react-flow__handle react-flow__handle-top" />
      <Handle type="source" position={Position.Bottom} className="react-flow__handle react-flow__handle-bottom" />
    </Box>
  ), [
    setNodeId,
  ]);

  const nodeTypes = {
    custom: CustomNode,
  };
  const initialNodes = [
    {
      id: '0',
      type: 'custom',
      data: { label: 'Trigger' },
      position: { x: 0, y: 50 },
    },
  ];
  const connectingNodeId = useRef<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useCallback((params: Connection) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds: Edge[]) => addEdge(params, eds));
  }, [setEdges]);

  const onConnectStart = useCallback((
    _: any,
    { nodeId }: OnConnectStartParams,
  ) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event: any) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = nodes[nodes.length - 1].id + 1;
        const newNode = {
          id,
          type: 'custom',
          position: {
            x: 0,
            y: nodes[nodes.length - 1].position.y + 100,
          },
          data: { label: 'Action' },
        };

        const newEdge: Edge = {
          id,
          source: connectingNodeId.current,
          target: id,
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat(newEdge));
      }
    },
    [
      nodes,
      setEdges,
      setNodes,
    ],
  );

  return (
    <Container useCompletePage={false}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Background color="#ccc" variant={BackgroundVariant.Dots} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Container>
  );
}

export default WorkflowMap;
