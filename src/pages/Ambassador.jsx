import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pohjala-logo (1).png"

function Ambassador() {
  return (
    <section id="ambassador">
        <figure className="logo__figure">
            <Link to={"/"}>
              <img src={Logo} alt="" className="logo__img" />
            </Link>
          </figure>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1cUZVvuSOzTJulfkedsX_QxIekxsHYR0m&hl=en&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
    </section>
  );
}

export default Ambassador;
