import React, { Profiler } from "react";
import Header from "./features/header/Header";
import "./app.scss";
import Introduction from "./features/introduction/Introduction";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Contacts from "./features/contacts/Contacts";
import Experience from "./features/experience/Experience";

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
}

function App() {
  return (
    <div className="app">
      <Profiler id="App" onRender={onRender}>
        <Header />
        <div className="container">
          <Introduction />
          <About />
          <Projects />
          <Experience />
          <Contacts />
        </div>
      </Profiler>
    </div>
  );
}

export default App;
