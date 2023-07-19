import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Specials from "./pages/Specials";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
