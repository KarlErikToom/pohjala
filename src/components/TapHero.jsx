import React from "react";

function TapHero() {
  return (
    <section id="taproom">
      <div className="container">
        <div className="row">
          <div className="taproom__wrapper">
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
                <dd>Peetri</dd>
              </dl>
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
                <dd>Book a table or a brewery tour</dd>
                <dd>Only walk-ins on Sundays</dd>
                <dd>taproom@pohjalabeer.com</dd>
                <dd>+372 5666 2800</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TapHero;
