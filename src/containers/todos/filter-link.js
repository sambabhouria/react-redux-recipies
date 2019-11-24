import { connect } from "react-redux";
import { setVisibilityFilter } from "../../redux/actions/todos";
import Link from "../../components/todos/link";

const mapStateToProps = ({ combineTodosReducers }: state, ownProps) => ({
  active: ownProps.filter === combineTodosReducers.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
