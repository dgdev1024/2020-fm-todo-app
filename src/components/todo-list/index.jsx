/**
 * @file components/todo-list/index.jsx
 * @brief Presents the list of submitted todo items below the todo form.
 */

// Imports
import React, { useState } from "react";
import TodoItem from "../todo-item";
import TodoControl from "../todo-control";
import { useTodoContext } from "../../contexts/todo";
import { useLocalStorage } from "../../hooks/use-local-storage";
import "./index.scss";

// Component
const TodoList = () => {
  const [dragIndex, setDragIndex] = useState(0);
  const [filterMode, setFilterMode] = useLocalStorage(
    "-fm-todo-filter-mode",
    "none"
  );
  const {
    todos,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    swapTodos,
  } = useTodoContext();

  return (
    <div className="todo-list">
      {todos
        .map((todo, index) => ({ ...todo, index }))
        .filter((todo) => {
          if (filterMode === "active") {
            return todo.completed === false;
          } else if (filterMode === "completed") {
            return todo.completed === true;
          } else {
            return true;
          }
        })
        .map((todo) => (
          <TodoItem
            key={todo.index}
            todo={todo}
            toggle={() => toggleTodo(todo.index)}
            del={() => deleteTodo(todo.index)}
            onDrag={() => setDragIndex(todo.index)}
            onDrop={(ev) => {
              ev.preventDefault();
              if (dragIndex !== todo.index) {
                swapTodos(dragIndex, todo.index);
              }
            }}
          />
        ))}
      <TodoControl
        itemsLeft={todos.filter((todo) => todo.completed === false).length}
        filterMode={filterMode}
        setFilterMode={setFilterMode}
        clearCompleted={deleteCompleted}
      />
    </div>
  );
};

// Export
export default TodoList;
