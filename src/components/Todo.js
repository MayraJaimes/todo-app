import React, { useState } from "react";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <div
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </div>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
};

export default Todo;
