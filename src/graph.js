import React from "react";
import useCytoscapeGraph from "./use-cytoscape-graph";
import clsx from "clsx";
import "./styles.css";

const Graph = (data) => {
  const ref = React.useRef(null);
  const handleOnOpen = () => {};
  const [node, setNode] = React.useState();

  // eslint-disable-next-line no-unused-vars
  const { cyNodes, layoutReady, handleNodeSelection } = useCytoscapeGraph({
    ref,
    data: data,
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
      <div ref={ref} id="graph" className="DefaultContainer" />
    </>
  );
};

export default Graph;
