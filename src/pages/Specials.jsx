import React, { useEffect, useState } from "react";
import Logo from "../assets/pohjala-logo (1).png";
import axios from "axios";
import { Link } from "react-router-dom";

function Specials() {
    const [beers, setBeers] = useState([]);
  async function getData() {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers?page=2");
    setBeers(data);
  }
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div>
      <section id="specials">
        <figure className="specials__logo">
          <Link to={"/"}>
            {" "}
            <img className="specials__logo--img" src={Logo} alt="" />{" "}
          </Link>
        </figure>
        <div className="specials__text">
          <h1>
            At Põhjala we experiment regularly to hone our craft, broaden our
            range of styles and deepen our knowledge of the latest trends.{" "}
            <br /> <br /> These trials have brought forth Imperial Goses,
            classic Barley Wines, and many other specialties along the way.{" "}
            <br />
            <br /> We collaborate with friends from as far afield as Beijing,
            and neighbors nearby. Whether we’re brewing with our brethren from
            Copenhagen, London, or Portland, the result is always something
            special.
          </h1>
        </div>
      </section>
      <section id="special__beer">
        <div className="container">
          <div className="row">
            <div className="beers__wrapper">
              {beers.slice(0, 25).map((beer, index) => (
                <div className="beer">
                  <figure className="beer__figure">
                    <img
                      src={beers.length > 0 && beer.image_url}
                      alt=""
                      className="beer__img"
                    />
                  </figure>

                  <div className="beer__info">
                    <h2 className="beer__name">{beer?.name}</h2>
                    <h2 className="beer__abv">{beer?.abv}%</h2>
                    <h3 className="beer__tagline">{beer?.tagline}</h3>
                        {index % 4 === 3 &&(<span className="discontinued">discontinued </span>)}
                    <p className="beer__description">
                      Taste: {beer?.description}
                    </p>
                    <details>
                      <summary>Read more...</summary>

                      <p className="beer__malts">
                        Malts:{" "}
                        {beer?.ingredients.malt
                          .map((malt) => malt.name)
                          .join(", ")}
                      </p>
                      <p className="beer__hops">
                        Hops:{" "}
                        {beer?.ingredients.hops
                          .map((hops) => hops.name)
                          .join(", ")}
                      </p>
                      <p className="beer__brewed">
                        First brewed: {beer?.first_brewed}
                      </p>
                    </details>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Specials;
