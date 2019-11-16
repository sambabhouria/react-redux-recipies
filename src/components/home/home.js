import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import readmePath from "./Readme.md";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
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
        <ReactMarkdown source={this.state.readme} />
      </div>
    );
  }
}

export default Home;
