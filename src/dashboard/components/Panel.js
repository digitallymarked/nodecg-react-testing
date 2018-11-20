import React from "react";

const streamTopic = nodecg.Replicant("streamTopic");

import "./panel.scss";

const updateReplicant = () => {
  streamTopic.value = "Stewie";
};

const Panel = () => (
  <div id="panel">
    <button onClick={updateReplicant}>Update Replicant</button>
  </div>
);

export default Panel;
