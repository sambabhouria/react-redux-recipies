import React from "react";
import ReadmePath from "./readme";

import AddTodo from "../../containers/todos/add-todos";
import Footer from "../../components/todos/footer";
import VisibleTodoList from "../../containers/todos/visible-todo-list";

const TodoApp = () => (
  <div>
    <div>
      <ReadmePath />
    </div>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
);

export default TodoApp;
