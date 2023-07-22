import React from "react";
import Saunaimg from "../assets/sauna.jpg";

function Sauna() {
  return (
    <section id="sauna">
      <div className="container">
        <div className="row">

        <div className="sauna__wrapper">
          <figure className="sauna__img--figure">
            <img src={Saunaimg} alt="" className="sauna__img" />
            <div className="sauna__info">
              <h1 className="tap__info--header">The Sauna</h1>
              <p className="tap__info--para">
                The sauna is available for rent during opening hours of the Tap
                Room and accommodates up to 8 people. It features a steam room,
                showers, and a resting area with sofas and chairs. <br />
                <br />
                Rent (2h minimum) is 70 € for the first hour and 50 € for each
                consecutive hour. Please book through <a href="mailto:taproom@pohjalabeer.com" className="underline">taproom@pohjalabeer.com</a>
              </p>
            </div>
          </figure>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Sauna;
