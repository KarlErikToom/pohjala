import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pohjala-logo (1).png";

function TapHero() {
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
    <section id="taproom"  >
      <div className="container">
        <div className="row">
          <figure className="logo__figure hidden" id="top">
            <Link to={"/"}>
              <img src={Logo} alt="" className="logo__img" />
            </Link>
          </figure>
          <div className="taproom__wrapper hidden">
            <div className="taproom__header">
              <h1>
                Põhjala Tap Room serves 24 Põhjala and guest beers on tap,
                paired with Texas BBQ. We also have a beer and merch shop,
                brewery tours and a private sauna for rent.
              </h1>
            </div>
            <div className="taproom__info">
              <dl className="taproom__location">
                <dt>Location</dt>
                <dd>
                  <a target="_blank" className="underline" href="https://www.google.com/maps/place/P%C3%B5hjala+Brewery+%26+Tap+Room/@59.4502981,24.7251903,17z/data=!4m6!3m5!1s0x4692934c25b67ff9:0x6b729063bb1cd04!8m2!3d59.4503201!4d24.727009!16s%2Fg%2F11b5s2dvs_?entry=ttu">
                    Peetri 5, Tallinn 10416
                  </a>{" "}
                </dd>
              </dl>
              <div className="opening__booking--wrapper">

              <dl className="taproom__opening">
                <dt>Opening Times</dt>
                <dd>Tue-Thu &nbsp;&nbsp;&nbsp; 12-00</dd>
                <dd>Fri-Sat&nbsp;&nbsp;&nbsp; 12-01</dd>
                <dd>(shop til 22)</dd>
                <dd>Sun &nbsp;&nbsp;&nbsp;10-17</dd>
                <dd>(Shop from 12)</dd>
                <dd>Mon &nbsp;&nbsp;&nbsp;Closed</dd>
              </dl>
              <dl className="taproom__booking">
                <dt>Info and bookings</dt>
                <dd> <a className="underline" target="_blank" href="https://book.dinnerbooking.com/ee/en-US/book/index/2051/2">Book a table or a brewery tour</a></dd>
                <dd>Only walk-ins on Sundays</dd>
                <dd>taproom@pohjalabeer.com</dd>
                <dd>+372 5666 2800</dd>
              </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TapHero;
