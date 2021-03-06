import React from "react";
import "./styles.css";
import data from "./data-nasa";
import Graph from "./graph";

export default function App() {
  return (
    <Graph
      dataNodes={data.networkData.dataNodes}
      dataLinks={data.networkData.dataLinks}
    />
  );
}
