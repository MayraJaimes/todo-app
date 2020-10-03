import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
