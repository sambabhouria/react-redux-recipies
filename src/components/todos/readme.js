import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";
import "./readme.css";

const style = {
  background: "#f9dcdd",
};

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
      <div style={style} className="readmeContainer">
        <ReactMarkdown source={this.state.readme} />
      </div>
    );
  }
}

export default Readme;
