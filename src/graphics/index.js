import React from "react";
import ReactDOM from "react-dom";

import Panel from '../dashboard/components/Panel'

const Dashboard = () => (
  <div>
    <Panel />
  </div>
);

ReactDOM.render(<Dashboard />, document.getElementById("root"));
