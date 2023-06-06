import React from "react";
import Header from "./features/header/Header";
import './app.scss'
import Introduction from "./features/introduction/Introduction";
import About from "./features/about/About";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Introduction />
        <About />
      </div>
    </div>
  );
}

export default App;
