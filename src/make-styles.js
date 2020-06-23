const makeStyles = () => {
  return [
    {
      selector: "node",
      style: {
        "background-color": "lightorange",
        width: 10,
        height: 10,
        opacity: 1,
        transition: "opacity 0.5s",
        "font-size": 9,
        "font-weight": "bold",
        "min-zoomed-font-size": 4,
        label: "data(id)",
        "text-wrap": "wrap",
        "text-max-width": 50,
        "text-events": "yes",
        color: "grey",
        "text-outline-width": 1,
        "text-outline-color": "#fff",
        "text-outline-opacity": 1,
        "overlay-color": "#fff",
      },
    },
    {
      selector: "node.faded",
      style: {
        opacity: 0.4,
      },
    },
    {
      selector: "node[type='mention']",
      style: {
        "background-color": "lightblue",
      },
    },
    {
      selector: "node[type='retweet']",
      style: {
        "background-color": "lightyellow",
      },
    },
    {
      selector: "node[type='quote']",
      style: {
        "background-color": "lightred",
      },
    },
    {
      selector: "node[type='reply']",
      style: {
        "background-color": "lightgreen",
      },
    },
    {
      selector: "edge",
      style: {
        width: 0.5,
        opacity: 0.5,
        transition: "opacity 0.5s",
        "line-color": "lightgrey",
        "target-arrow-color": "lightgrey",
        "target-arrow-shape": "triangle",
      },
    },
    {
      selector: "edge.highlighted",
      style: {
        width: 1.2,
        opacity: 1,
      },
    },
  ];
};

export default makeStyles;
