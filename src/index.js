import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SideBar from "./components/SideBar";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="parent-component">
      <div className="child-component-1">
        <App />
      </div>
      <div className="child-component-2">
        <SideBar />
      </div>
    </div>
  </React.StrictMode>
);

