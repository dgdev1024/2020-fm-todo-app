/**
 * @file components/todo-control/index.jsx
 * @brief Presents controls for filtering todos and showing details.
 */

// Imports
import React from "react";
import "./index.scss";

// Components
const TodoControl = ({
  itemsLeft,
  filterMode,
  setFilterMode,
  clearCompleted,
}) => {
  return (
    <div className="todo-control">
      <p className="todo-control__items-left">
        {itemsLeft} {itemsLeft === 1 ? "item" : "items"} left
      </p>
      <div className="todo-control__filter-strip">
        <button
          className={`todo-control__filter ${
            filterMode === "none" && "todo-control__filter--active"
          }`}
          onClick={() => setFilterMode("none")}
        >
          All
        </button>
        <button
          className={`todo-control__filter ${
            filterMode === "active" && "todo-control__filter--active"
          }`}
          onClick={() => setFilterMode("active")}
        >
          Active
        </button>
        <button
          className={`todo-control__filter ${
            filterMode === "completed" && "todo-control__filter--active"
          }`}
          onClick={() => setFilterMode("completed")}
        >
          Completed
        </button>
      </div>
      <button
        className="todo-control__clear-completed"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

// Export
export default TodoControl;
