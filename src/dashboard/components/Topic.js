import React, { Component } from "react";

const streamTopic = nodecg.Replicant("streamTopic");

import "./Topic.scss";

export default class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTopic: streamTopic.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Getting the value of the input field
  handleChange(event) {
    this.setState({ currentTopic: event.target.value });
  }

  //Sending the value to the replicant
  handleSubmit(event) {
    event.preventDefault();
    streamTopic.value = this.state.currentTopic;
  }

  componentDidMount() {
    //Listen for changes and update when the Replicant value changes
    streamTopic.on("change", newValue => {
      this.setState({ currentTopic: newValue });
    });
  }

  render() {
    return (
      <div className="topic">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentTopic}
            onChange={this.handleChange}
          />
          <input type="submit" value="Change Topic" />
        </form>
      </div>
    );
  }
}
