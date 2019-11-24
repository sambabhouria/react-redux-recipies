import { connect } from "react-redux";

import CounterApp from "../../components/counter/counter";
const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
