import React from "react";
import Logo from "../assets/pohjala-logo.png"


function Hero() {
  return (
    <section id="hero">
      <figure className="logo__figure">
            <a href=""> <img  src={Logo} alt="" className="logo__img" /></a>
        </figure>
      <div className="hero__text">
        <h1 >
          We are Põhjala Brewery. Our beers are inspired by our heritage,{" "}
          <span className="yellow">local nature</span> and cuisine. We take
          well-known beer styles and add our own distinctive twist with{" "}
          <span className="yellow">surprising ingredients</span> or long{" "}
          <span className="yellow">barrel aging</span>.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
