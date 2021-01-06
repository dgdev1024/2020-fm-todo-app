/**
 * @file components/header/index.jsx
 * @brief Presents the header at the top of the page.
 */

// Imports
import React from "react";
import IconSun from "../svg/icon-sun";
import IconMoon from "../svg/icon-moon";
import "./index.scss";

// Component
const Header = ({ dark, setDark }) => (
  <header className="header">
    <h1 className="header__heading">Todo</h1>
    <button
      className="header__dark-toggle"
      aria-label={`Toggle ${dark ? "Light" : "Dark"} Mode`}
      title={`Toggle ${dark ? "Light" : "Dark"} Mode`}
      onClick={() => setDark(!dark)}
    >
      {dark ? (
        <IconSun className="header__dark-toggle-icon" />
      ) : (
        <IconMoon className="header__dark-toggle-icon" />
      )}
    </button>
  </header>
);

// Export
export default Header;
