import React from "react";
import Header from "./features/header/Header";
import './app.scss'
import Introduction from "./features/introduction/Introduction";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Contacts from "./features/contacts/Contacts";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Introduction />
        <About />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
