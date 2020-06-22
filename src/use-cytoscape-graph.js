import React from "react";
import Cytoscape from "cytoscape";
import cola from "cytoscape-cola";

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
      animate: false,
      zoom: 2,
      elements: {
        nodes,
        edges: links,
      },
    });

    layout = cy.layout({
      name: "cola",
    });

    layout.pon("layoutstart", () => {
      console.time("drawing");
    });

    layout.pon("layoutstop", () => {
      console.log("layoutstop promise");
      console.timeEnd("drawing");
      setLayoutReady(true);
    });

    layout.run();

    /*  console.log(cy.nodes()[0].data());
    cy.zoom({
      level: 10,
      position: cy.getElementById("node[id='NASA']").position(),
    }); */
    // setCyNodes(cy.nodes());
  }, [links, nodes, ref]);

  return {
    cyNodes,
    layoutReady,
    handleToggle: () => {},
    handleNodeSelection: (node) => {},
  };
};

export default useCytoscapeGraph;
