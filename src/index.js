import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import "./Styles/dpd-styles.css";
import "./Styles/font-styles.css";
import "./Styles/input-styles.css";
import "./Styles/spacing-styles.css";
import "./Styles/styles-specific.css";
import "./Styles/universal-styles.css";
// import "./Styles/container-styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
