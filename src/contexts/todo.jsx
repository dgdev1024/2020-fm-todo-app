/**
 * @file contexts/todo.jsx
 */

// Imports
import React, { useContext, useEffect } from "react";
import { TodoActions, useTodoReducer } from "../reducers/todo";

// Create Context
const Context = React.createContext();

// Provider Component
const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useTodoReducer();

  useEffect(() => {
    localStorage.setItem("-fm-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const todoAlreadyExists = todos.some(
      (t) => t.body.toLowerCase() === todo.body.toLowerCase()
    );
    if (todoAlreadyExists === false)
      dispatch({ type: TodoActions.ADD_TODO, payload: todo });
  };

  const toggleTodo = (index) => {
    dispatch({ type: TodoActions.TOGGLE_TODO, payload: index });
  };

  const deleteTodo = (index) => {
    dispatch({ type: TodoActions.DELETE_TODO, payload: index });
  };

  const deleteCompleted = () => {
    dispatch({ type: TodoActions.DELETE_COMPLETED_TODOS });
  };

  const swapTodos = (first, second) => {
    if (first !== second)
      dispatch({ type: TodoActions.SWAP_TODOS, payload: { first, second } });
  };

  return (
    <Context.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        deleteCompleted,
        swapTodos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Exports
export default TodoProvider;
export const useTodoContext = () => useContext(Context);
