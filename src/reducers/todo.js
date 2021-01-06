/**
 * @file reducers/todo.js
 * @brief Actions and Reducer for Todo List Items.
 */

// Imports
import { useReducer } from "react";

// Actions
const Actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  DELETE_COMPLETED_TODOS: "DELETE_COMPLETED_TODOS",
  SWAP_TODOS: "SWAP_TODOS",
};

// Reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...state, action.payload];
    case Actions.TOGGLE_TODO:
      return state.map((todo, index) =>
        action.payload === index
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    case Actions.DELETE_TODO:
      return state.filter((_, index) => action.payload !== index);
    case Actions.DELETE_COMPLETED_TODOS:
      return state.filter((todo) => todo.completed === false);
    case Actions.SWAP_TODOS:
      const { first, second } = action.payload;
      const swappedTodos = state.slice();
      const firstTodo = swappedTodos[first];
      swappedTodos[first] = swappedTodos[second];
      swappedTodos[second] = firstTodo;
      return swappedTodos;
    default:
      console.error(`Invalid Action: ${action.type}`);
      return state;
  }
};

// Get todos from local storage.
const getFromLocalStorage = () => {
  const todos = localStorage.getItem("-fm-todos");
  if (!todos) {
    return [];
  } else {
    const todosArray = JSON.parse(todos);
    if (Array.isArray(todosArray) === false) return [];
    else
      return todosArray.filter(
        (todo) =>
          typeof todo.body === "string" && typeof todo.completed === "boolean"
      );
  }
};

// Export Reducer
export const TodoActions = Actions;
export const useTodoReducer = () => useReducer(Reducer, getFromLocalStorage());
