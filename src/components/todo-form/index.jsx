/**
 * @file components/todo-form/index.jsx
 * @brief Presents the todo input form below the header.
 */

// Imports
import React from "react";
import { useTodoContext } from "../../contexts/todo";
import { useLocalStorage } from "../../hooks/use-local-storage";
import "./index.scss";

// Component
const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [input, setInput] = useLocalStorage("-fm-todo-input", "");
  const [completed, setCompleted] = useLocalStorage(
    "-fm-todo-input-completed",
    false
  );

  const onChecked = (ev) => {
    const { checked, classList } = ev.target;
    setCompleted(checked);
    if (classList.contains("todo-form__complete--animate") === false)
      classList.add("todo-form__complete--animate");
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    addTodo({ body: input, completed });

    setInput("");
    setCompleted(false);
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        className="todo-form__complete"
        type="checkbox"
        aria-label="Mark the new todo as completed"
        title="Mark the new todo as completed"
        checked={completed}
        onChange={onChecked}
      />
      <input
        className="todo-form__input"
        type="text"
        aria-label="Create a new todo"
        placeholder="Create a new todo..."
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        required
      />
    </form>
  );
};

// Exports
export default TodoForm;
