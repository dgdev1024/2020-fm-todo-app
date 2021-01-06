/**
 * @file index.jsx
 * @brief The entry point into our application.
 */

// Imports
import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./index.scss";

// Render to Mount Node
const mountNode = document.querySelector(".app-root");
render(<App />, mountNode);
