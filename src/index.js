import React from "react";
import ReactDOM from "react-dom/client";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Header from "./Header";
import InTouch from "./InTouch";
import Projects from "./Projects";
import RightsReserved from "./RightsReserved";
import SidePanels from "./SidePanels";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SidePanels />
    <AboutMe />
    <Experience />
    <Projects />
    <InTouch />
    <RightsReserved />
  </React.StrictMode>
);
