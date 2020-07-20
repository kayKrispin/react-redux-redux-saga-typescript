import React from "react";
import { INavbar } from "../types";
import { EModelTypes } from "../types";

const NavBar: React.FC<INavbar> = ({ onChange }) => {

  return (
    <nav>
      <div className="nav-wrapper pink darken-4">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
          <button onClick={() => onChange("hello")}>purple</button>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;
