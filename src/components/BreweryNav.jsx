import React from "react";
import { NavHashLink } from "react-router-hash-link";

function BreweryNav() {
  return (
    <nav  className="sub__nav sub__nav--brewery">
      <NavHashLink
        to={"/taproom#tours"}
        location={{
          pathname: document.location.pathname + document.location.hash,
        }}
        className="btn"
      >
        Brewery tours
      </NavHashLink>
      <a href="https://pohjalabeer.com/lab.html" target="_blank" className="btn no">
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
