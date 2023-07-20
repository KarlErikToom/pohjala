import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Specials from "./pages/Specials";
import Cellar from "./pages/Cellar";
import Forest from "./pages/Forest";
import TapRoom from "./pages/TapRoom";
import Brewery from "./pages/Brewery";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/cellar" element={<Cellar />} />
          <Route path="/forest" element={<Forest />} />
          <Route path="/taproom" element={<TapRoom />} />
          <Route path="/brewery" element={<Brewery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
