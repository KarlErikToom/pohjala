import React from "react";
import Taproom2 from "../assets/taproom-2.jpg";

function TapTapRoom() {
  return (
    <section id="tap">
      <div className="container">
        <div className="row">

        <div className="tap__wrapper">
          <figure className="tap__img--figure">
            <img src={Taproom2} alt="" className="tap__img" />
          </figure>
          <div className="tap__info">
            <h1 className="tap__info--header">The Tap Room</h1>
            <p className="tap__info--para">
              Our 24 taps feature the freshest Põhjala IPAs, our richest barrel
              aged Imperial Stouts, and selected guest beers. <br />
              <br />
              The cuisine, curated by Chef Michael Holman, is centered around
              Texas BBQ that we smoke on the spot and features various sides,
              salads, sandwiches, snacks and desserts. Our breads, cakes,
              sauces, pickles, bacon and sausages are house made. <br />
              <br />
              <a
                href="mailto:taproom@pohjalabeer.com "
                className="underline"
                target="_blank"
                >
                Contact us
              </a>{" "}
              for inquiries and bookings.
            </p>
            <div className="tap__links">
              <a href="https://qr.pohjalabeer.com/index-en.html" target="_blank" className="btn">
                Food Menu
              </a>
              <a href="https://qr.pohjalabeer.com/sunday.html" target="_blank" className="btn">
                Sunday Food Menu
              </a>
            </div>
          </div>
                </div>
        </div>
      </div>
    </section>
  );
}
export default TapTapRoom;
