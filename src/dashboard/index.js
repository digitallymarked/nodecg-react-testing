import React from "react";
import ReactDOM from "react-dom";

import Panel from "./components/Panel";

const Dashboard = () => (
  <div>
    <Panel />
  </div>
);

ReactDOM.render(<Dashboard />, document.getElementById("root"));
