import React from "react";
import Cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import makeStyles from "./make-styles";

const MAX_DISTANCE = 15;
// inspiration
// https://codesandbox.io/s/cytoscapejs-react-hooks-b0ntj?file=/src/components/Graph.tsx

// eslint-disable-next-line no-unused-vars
let cy;
let layout;

// eslint-disable-next-line no-unused-vars
const useCytoscapeGraph = ({ ref, data }) => {
  // const [cyNodes, setCyNodes] = React.useState(null);
  const [nodeHighlighted, setNodeHighlighted] = React.useState(false);

  const unhighlight = () => {
    const allEles = cy.elements();
    const allNodes = cy.nodes();

    cy.stop();
    allNodes.stop();

    cy.batch(() => {
      allEles.removeClass("faded").removeClass("highlighted");
    });
  };

  const highlight = (node) => {
    if (nodeHighlighted) return;
    setNodeHighlighted(true);

    const allEles = cy.elements();
    const nhood = node.closedNeighborhood();
    const edges = node.connectedEdges();
    const others = allEles.not(nhood);

    console.log("edges", edges);

    const showOthersFaded = () => {
      cy.batch(() => {
        others.addClass("faded");
        edges.addClass("highlighted");
      });
    };

    return Promise.resolve()
      .then(showOthersFaded)
      .then(() => {
        setNodeHighlighted(false);
      });
  };

  React.useEffect(() => {
    if (!ref.current) return;
    try {
      if (!cy) {
        Cytoscape.use(cola);
        cy = new Cytoscape({
          container: ref.current,
          style: makeStyles(),
        });
      }
    } catch (error) {
      console.error(error);
    }
    return () => cy && cy.destroy();
  }, []);

  React.useEffect(() => {
    const { dataNodes, dataLinks } = data;
    if (cy) {
      if (layout) layout.stop();

      cy.add({ nodes: dataNodes, edges: dataLinks });
      layout = cy.layout({
        name: "cola",
        animate: true,
        infinite: true,
        maxZoom: 1,
        fit: false,
        edgeLength: (e) => {
          return MAX_DISTANCE * e.data("betweennessWeighted");
        },
      });
      console.log(layout);
      layout.run();
    }
  }, [data]);

  // https://js.cytoscape.org/#events
  React.useEffect(() => {
    cy.on("tapstart", (e) => {
      if (e.target !== cy) highlight(e.target);
    });
    cy.on("tapdragout", (e) => {
      if (e.target !== cy) unhighlight();
    });
    cy.on("tap", () => {
      console.log("tap");
    });
  }, [cy]);

  return {
    handleToggle: () => {},
    handleNodeSelection: (node) => {},
  };
};

export default useCytoscapeGraph;
