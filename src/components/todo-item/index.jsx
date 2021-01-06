/**
 * @file components/todo-item/index.jsx
 * @brief Presents a todo item in the todo list.
 */

// Imports
import React from "react";
import IconCross from "../svg/icon-cross";
import "./index.scss";

// Component
const TodoItem = ({ todo, toggle, del, onDrag, onDrop }) => {
  const { body, completed } = todo;

  const onChecked = (ev) => {
    const { classList } = ev.target;
    toggle();
    if (classList.contains("todo-item__complete--animate") === false)
      classList.add("todo-item__complete--animate");
  };

  return (
    <div
      className="todo-item"
      draggable="true"
      onDragStart={onDrag}
      onDragOver={(ev) => ev.preventDefault()}
      onDrop={onDrop}
    >
      <input
        className="todo-item__complete"
        type="checkbox"
        aria-label="Mark the todo as completed"
        title="Mark the todo as completed"
        checked={completed}
        onChange={onChecked}
      />
      <p className="todo-item__body">{body}</p>
      <button
        className="todo-item__delete"
        onClick={del}
        aria-label="Delete this todo"
        title="Delete this todo"
      >
        <IconCross className="todo-item__delete-icon" />
      </button>
    </div>
  );
};

// Export
export default TodoItem;
