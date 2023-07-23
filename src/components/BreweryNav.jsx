import React, { useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

function BreweryNav() {
  useEffect(()=>{
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) =>{
        if(entry.isIntersecting){
          entry.target.classList.add("show")
        }else{
          entry.target.classList.remove("show")
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden")
    hiddenElements.forEach((el) => observer.observe(el))

  })
  return (
    <nav  className="sub__nav sub__nav--brewery hidden">
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
