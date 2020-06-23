import React from "react";
import Cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import makeStyles from "./make-styles";

const MAX_DISTANCE = 150;
// inspiration
// https://codesandbox.io/s/cytoscapejs-react-hooks-b0ntj?file=/src/components/Graph.tsx

// eslint-disable-next-line no-unused-vars
let cy;
let layout;

// eslint-disable-next-line no-unused-vars
const useCytoscapeGraph = ({ ref, data }) => {
  const [cyNodes, setCyNodes] = React.useState(null);
  const [layoutReady, setLayoutReady] = React.useState(false);

  /* 
    cy.on("tap", (e) => {
      console.log(e);
    }); */
  /* 
    layout.pon("layoutstart", () => {
      console.time("drawing");
    });

    layout.pon("layoutstop", () => {
      console.timeEnd("drawing");
      setLayoutReady(true);
    }); */
  React.useEffect(() => {
    if (!ref.current) return;
    try {
      if (!cy) {
        Cytoscape.use(cola);
        cy = new Cytoscape({
          container: ref.current,
          style: makeStyles(),
        });
        console.log(cy);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  React.useEffect(() => {
    // console.log("hi", nodes, links, ref);
    console.log(data, cy);
    const { dataNodes, dataLinks } = data;
    if (cy) {
      if (layout) layout.stop();

      cy.add({ nodes: dataNodes, edges: dataLinks });
      layout = cy.layout({
        name: "cola",
        animate: true,
        infinite: true,
        maxZoom: 10,
        fit: false,
        edgeLength: (e) => {
          return MAX_DISTANCE * e.data("betweennessWeighted");
        },
      });
      console.log(layout);
      layout.run();
    }
  }, [data]);

  return {
    cyNodes,
    layoutReady,
    handleToggle: () => {},
    handleNodeSelection: (node) => {},
  };
};

export default useCytoscapeGraph;
