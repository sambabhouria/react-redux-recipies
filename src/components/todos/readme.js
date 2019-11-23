import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";
class Readme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readme: null,
    };
  }
  componentDidMount() {
    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        this.setState({ readme: text });
      });
  }
  render() {
    return (
      <div className="content">
          Readme going here
        {/* <ReactMarkdown source={this.state.readme} /> */}
      </div>
    );
  }
}

export default Readme;
