import React, {Component} from "react";
import ReactDOM from "react-dom";

const streamTopic = nodecg.Replicant("streamTopic");

class Overlay extends Component {
  constructor() {
    super();
    this.state = {
      topic: streamTopic.value
    };
  }

  componentDidMount() {
    //Listen for changes and update when the Replicant value changes
    streamTopic.on("change", newValue => {
      this.setState({ topic: newValue });
    });
  }
  render() {
    return <h1>{this.state.topic}</h1>;
  }
}

ReactDOM.render(<Overlay />, document.getElementById("root"));
