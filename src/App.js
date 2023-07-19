import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Core from "./components/Core";
function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Core />
    </div>
  );
}

export default App;
