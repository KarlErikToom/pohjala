import React, { useEffect } from "react";
import Sweatshirt from "../assets/sweatshirt.jpg";

function Shop() {
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
    <section id="shop" className="hidden">
      <div className="container">
        <div className="row">
          <div className="show__wrapper">
            <figure className="shop__img--figure">
              <img src={Sweatshirt} alt="" className="shop__img" />
            </figure>
            <div className="shop__info">
              <h1 className="tap__info--header">The Shop</h1>
              <p className="tap__info--para">
                The main entrance hall features a beer and merch shop. <br />
                <br />
                We always have the best and freshest selection of Põhjala beers
                available, with T-shirts, sweatshirts, hoodies, caps, glasses
                and other stuff as a gift to yourself or a Põhjala fan back
                home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
