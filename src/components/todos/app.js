import React from "react";
import ReadmePath from "./readme";

 import AddTodo from "../../containers/todos/add-todos"

const TodoApp = () => (
  <div>
    <div>
           <ReadmePath />
    </div>
    <div>
        <AddTodo />
    </div>
  </div>
);

export default TodoApp;
