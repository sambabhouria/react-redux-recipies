import { connect } from "react-redux";
import { toggleTodo } from "../../redux/actions/todos";
import TodoList from "../../components/todos/todo-list";
import { VisibilityFilters } from "../../redux/actions/todos";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = ({ combineTodosReducers }: state) => ({
  todos: getVisibleTodos(
    combineTodosReducers.todos,
    combineTodosReducers.visibilityFilter,
  ),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
