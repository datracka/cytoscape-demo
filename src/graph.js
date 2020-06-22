import React from "react";
import useCytoscapeGraph from "./use-cytoscape-graph";
import clsx from "clsx";
import "./styles.css";

const Graph = ({ dataNodes, dataLinks }) => {
  const ref = React.useRef(null);
  const handleOnOpen = () => {};
  const [node, setNode] = React.useState();

  // eslint-disable-next-line no-unused-vars
  const { cyNodes, layoutReady, handleNodeSelection } = useCytoscapeGraph({
    ref,
    nodes: dataNodes,
    links: dataLinks,
    handleOnOpen,
  });
  // console.log("cyNodes", cyNodes);
  const handleLastClick = () => {};
  const handleNextClick = () => {
    console.log(cyNodes);
    const node = cyNodes.last();
    console.log(node.position(), node.renderedPosition());
    handleNodeSelection(node);
    setNode(node);
  };
  console.log("layoutReady", layoutReady);
  // className={clsx({ Graph: true, Active: layoutReady })}
  return (
    <>
      <div>sss</div>
      <div className="Links">
        <span className="Link" onClick={handleLastClick}>
          previous Influencer
        </span>
        <span className="Link" onClick={handleNextClick}>
          Next Influencer{" "}
        </span>
      </div>
      <div
        ref={ref}
        id="graph"
        className={clsx({ Container: true, Active: layoutReady })}
      />
    </>
  );
};

export default Graph;
