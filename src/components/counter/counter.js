import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";

const style = {
  marginTop: "8px",
  marginBottom: "8px",
  background: "#f9dcdd",
};

class CounterApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readme: null,
    };
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  componentDidMount() {
    fetch(readmePath)
      .then(response => response.text())
      .then(text => {
        this.setState({ readme: text });
      });
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <div style={style}>
          {this.state.readme === null ? (
            "Chargement..."
          ) : (
            <ReactMarkdown source={this.state.readme} />
          )}
        </div>
        <p>
          Clicked: {value} times{" "}
          <button onClick={onIncrement}>
            <i className="fas fa-plus"></i>
          </button>{" "}
          <button onClick={onDecrement}>
            <i className="fas fa-minus"></i>
          </button>{" "}
          <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
          <button onClick={this.incrementAsync}>Increment async</button>
        </p>
      </div>
    );
  }
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CounterApp;
