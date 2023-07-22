import React from "react";
import { NavHashLink } from "react-router-hash-link";

function BreweryNav() {
  return (
    <nav className="sub__nav sub__nav--brewery">
      <NavHashLink to={"/taproom#tours"} className="btn">
        Brewery tours
      </NavHashLink>
      <a href="#tours" className="btn">
        Lab services
      </a>
      <a href="https://tcbw.ee/" target="_blank" className="btn">
        TCBW Festival
      </a>
      <a href="mailto:pohjala@pohjalabeer.com" className="btn">
        Contact team
      </a>
    </nav>
  );
}

export default BreweryNav;
