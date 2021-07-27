import React from "react";
import "./App.css";

import { Menu } from "antd";

import DynamicForm from "./components/dynamic-form";

function App() {
  return (
    <div className="App">
      <Menu mode="horizontal">&nbsp;</Menu>
      <DynamicForm />
    </div>
  );
}

export default App;
