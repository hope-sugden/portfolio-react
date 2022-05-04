import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Experience from "./containers/Experience/Experience";
import { Projects } from "./containers/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";


const App = () => {
  return (
    <div>
      <NavBar />
      <Profile />
      <Experience />
      <Projects />
      <About />
      <Contact />

    </div>
  );
};

export default App;
