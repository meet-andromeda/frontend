import { styled } from '@mui/material';
import {
  ReactFlow, 
  Background,
  BackgroundVariant,
  MiniMap,
  useEdgesState,
  useNodesState,
  addEdge,
  Controls,
  Handle,
  Position,
  Node,
} from '@xyflow/react';
import { useCallback, useRef } from 'react';

import '@xyflow/react/dist/style.css';
import '../css/index.css';
import CustomNode from './custom-node';

const Container = styled('div')`
  width: 60vw;
  height: 100vh;
  border: 0.5rem solid #ddd;
`;


interface WorkflowMapProps {
  setNodeId: (id: string) => void;
}

function WorkflowMap({
  setNodeId
}: WorkflowMapProps) {
  const CustomNode = ({ data }: {data: Node}) => {
    return (
      <div
        onClick={() => {
          setNodeId(data.id.toString())
        }}
        className="react-flow__node-default"
        style={{ cursor: 'pointer', }}>
        {data.label}
        <Handle type="target" position={Position.Top} className="react-flow__handle react-flow__handle-top" />
        <Handle type="source" position={Position.Bottom} className="react-flow__handle react-flow__handle-bottom" />
      </div>
      
    );
  };

  const nodeTypes = {
    custom: CustomNode,
  };
  const initialNodes = [
    {
      id: '0',
      type: 'custom',
      data: { label: 'Trigger', id: '0' },
      position: { x: 0, y: 50 },
    },
  ];
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  let id: number = 1;
  const getId = () => `${id++}`;

  const onConnect = useCallback((params: any) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, [nodes]);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event: any) => {
      console.log(event)
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const newNode = {
          id: nodes[nodes.length-1].id + 1,
          type: 'custom',
          position: {
            x: 0,
            y: nodes[nodes.length-1].position.y + 100,
          },
          data: { label: 'Action', id: nodes[nodes.length-1].id + 1 },
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id: nodes[nodes.length-1].id + 1,
            source: connectingNodeId.current,
            target: nodes[nodes.length-1].id + 1,
          }),
        );
      }
    },
    [nodes],
  );

  return (
    <Container>
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
        <Background color="#ccc" variant={BackgroundVariant.Dots}/>
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Container>
  );
}

export default WorkflowMap;