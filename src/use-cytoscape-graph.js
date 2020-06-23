import React from "react";
import Cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import makeStyles from "./make-styles";

const MAX_DISTANCE = 150;
// inspiration
// https://codesandbox.io/s/cytoscapejs-react-hooks-b0ntj?file=/src/components/Graph.tsx

Cytoscape.use(cola);

// eslint-disable-next-line no-unused-vars
let cy;
let layout;

// eslint-disable-next-line no-unused-vars
const useCytoscapeGraph = ({ ref, nodes, links }) => {
  const [cyNodes, setCyNodes] = React.useState(null);
  const [layoutReady, setLayoutReady] = React.useState(false);

  React.useEffect(() => {
    // console.log("hi", nodes, links, ref);
    cy = new Cytoscape({
      container: ref.current,
      elements: {
        nodes,
        edges: links,
      },
      style: makeStyles(),
    });

    cy.on("tap", (e) => {
      console.log(e);
    });

    layout = cy.layout({
      name: "cola",
      animate: true,
      infinite: true,
      fit: true,
      edgeLength: (e) => {
        return MAX_DISTANCE * e.data("betweennessWeighted");
      },
    });

    layout.pon("layoutstart", () => {
      console.time("drawing");
    });

    layout.pon("layoutstop", () => {
      console.timeEnd("drawing");
      setLayoutReady(true);
    });

    layout.run();
  }, [links, nodes, ref]);

  return {
    cyNodes,
    layoutReady,
    handleToggle: () => {},
    handleNodeSelection: (node) => {},
  };
};

export default useCytoscapeGraph;
