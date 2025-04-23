import React from "react";

const Header = () => {
  return (
    <header className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center p-6 bg-blue-l">
        <h1 className="font-size-h1 f-f-weight-demibold f-color-secondary">
          Blog
        </h1>
        <p>Created by someone</p>
      </div>
      <div className="d-flex justify-content-between align-items-center p-6 bg-blue-vl gap-32">
        <input className="search-bar input-field" />
        <nav className="nav">
          <ul className="d-flex justify-content-between menu-items">
            <li>
              <a href="/" className="menu-item f-color-mute">
                HOME
              </a>
            </li>
            <li>
              <a href="/" className="menu-item f-color-mute">
                POST
              </a>
            </li>
            <li>
              <a href="/" className="menu-item f-color-mute">
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
