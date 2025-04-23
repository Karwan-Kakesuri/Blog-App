import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const Header = ({ onInputChange }) => {
  return (
    <header className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center p-6 bg-blue-l">
        <h1 className="font-size-h1 f-f-weight-demibold f-color-secondary">
          Blog
        </h1>
        <p>Created by someone</p>
      </div>
      <div className="d-flex justify-content-between align-items-center p-6 bg-blue-vl gap-32">
        <input className="search-bar input-field" onChange={onInputChange} />
        <nav className="nav">
          <ul className="d-flex justify-content-between menu-items">
            <li>
              <Link to="/Home" className="menu-item f-color-mute">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/POST" className="menu-item f-color-mute">
                POST
              </Link>
            </li>
            <li>
              <Link to="/ABOUT" className="menu-item f-color-mute">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
