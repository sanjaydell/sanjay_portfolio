import React from "react";
import Header from "./features/header/Header";
import './app.scss'
import Introduction from "./features/introduction/Introduction";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Introduction />
        <Introduction />
        <Introduction />
        <Introduction />
        <Introduction />
      </div>
    </div>
  );
}

export default App;
