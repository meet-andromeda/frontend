import { Handle, Position } from "@xyflow/react";

const CustomNode = ({ data }) => {
  const onClick = () => {
    alert('Node clicked!');
    // You can perform any action here, like navigating to another page or updating state.
  };

  return (
    <div onClick={onClick} className="react-flow__node-default" style={{ cursor: 'pointer', }}>
      {data.label}
      <Handle type="target" position={Position.Top} className="react-flow__handle react-flow__handle-top" />
      <Handle type="source" position={Position.Bottom} className="react-flow__handle react-flow__handle-bottom" />
    </div>
    
  );
};

export default CustomNode