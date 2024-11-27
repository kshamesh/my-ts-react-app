import React from "react";
import { useState } from "react";
import "./App.css";
import TypeaheadSearch from "./components/TypeaheadSearch";
import ParentComponent from "./learning/useCallbackDemo";
import { Counter } from "./learning/useReducerDemo";
import TodoList from "./learning/TodoList";
import FormComponent from "./learning/FormComponent";
import Board from "./components/Tic-Tac-Toe";
import PostsGrid from "./components/EnrichName/PostsGrid";
// import GridComponent from "./components/ToggleNumbers/GridComponent";

function App() {
  return (
    <div>
      <PostsGrid />
    </div>
  );
}

export default App;
