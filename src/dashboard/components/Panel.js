import React, { Component } from "react";

const streamTopic = nodecg.Replicant("streamTopic");

import "./panel.scss";

const updateReplicant = () => {
  streamTopic.value = "Changed back";
};

export default class Panel extends Component {
  render() {
    return (
      <div id="panel">
        <button onClick={updateReplicant}>Update Replicant</button>
      </div>
    );
  }
}
