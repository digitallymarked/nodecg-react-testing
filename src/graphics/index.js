import React from "react";
import ReactDOM from "react-dom";

const streamTopic = nodecg.Replicant("streamTopic");

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      topic: "Not Set"
    };
  }

  componentDidMount() {
    //Load initial value and set it's propper state
    nodecg.readReplicant("streamTopic", value => {
      this.setState({ topic: value });
    });

    //Listen for changes and update when the Replicant value changes
    streamTopic.on("change", newValue => {
      this.setState({ topic: newValue });
    });
  }
  render() {
    return <h1>Hello, {this.state.topic}</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
