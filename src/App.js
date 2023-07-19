import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Specials from "./pages/Specials";
import Cellar from "./pages/Cellar";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/cellar" element={<Cellar/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
