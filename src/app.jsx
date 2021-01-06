/**
 * @file app.jsx
 * @brief The application's top-level component.
 */

// Imports
import React from "react";
import TodoProvider from "./contexts/todo";
import Header from "./components/header";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";
import { useLocalStorage } from "./hooks/use-local-storage";

// Inner App Component
const InnerApp = () => {
  const [dark, setDark] = useLocalStorage("-fm-dark-mode", false);

  return (
    <main className={`main ${dark && "main--dark"}`}>
      <div className="main__container">
        <Header dark={dark} setDark={setDark} />
        <TodoForm />
        <TodoList />
        <p className="main__drag">
          Drag and drop to reorder the list. (Desktop devices only)
        </p>
      </div>
    </main>
  );
};

// Outer App Component, with Providers
const OuterApp = () => (
  <TodoProvider>
    <InnerApp />
  </TodoProvider>
);

// Export
export default OuterApp;
