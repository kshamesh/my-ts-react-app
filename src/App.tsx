import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { GreetFunctionJS } from "./components/GreetFunctionJS";
import { GreetFunctionTS } from "./components/GreetFunctionTS";
import ToggleText from "./components/ToggleText";

function App() {
  return (
    <div>
      <ToggleText />
    </div>
  );
}

export default App;
