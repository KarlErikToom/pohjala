import React from "react";
import Taproom3 from "../assets/taproom-3.jpg"

function Tours() {
  return (
    <section id="tours">
      <div className="container">
        <div className="tours__wrapper">
          <div className="tours__info">
            <h1 className="tap__info--header">Brewery Tours</h1>
            <p className="tours__info--para">
              Thursday and Friday: <br />
              15:00 in English, 17:00 in Estonian. <br />
              <br />
              Saturday: <br /> 13:0 in English, 15:00 in Estonian <br />
              <br />
              Sunday: <br /> 13:00 in English. <br />
              <br />
              Please contact us for requests of private tours from Tuesday to
              Sunday in English, Finnish or Russian. <br />
              <br />
              The tour includes a ca 45-minute stroll through production with
              information about beer making and the brewery and tasting of 3—4
              different beers. <br />
              <br />
              Tours cost 14€. Please pre-register at least 24h in advance (20
              places available for each tour).
            </p>
            <a href="" className="btn">Book a tour</a>
          </div>
          <figure className="tours__img--figure">
            <img src={Taproom3} alt="" className="tours__img" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Tours;
