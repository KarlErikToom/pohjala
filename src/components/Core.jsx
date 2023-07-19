import React, { useEffect, useState } from "react";
import axios from "axios";

function Core() {
  const [beers, setBeers] = useState([]);
  async function getData() {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers?page=1");
    setBeers(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="core">
      <div className="container">
        <div className="row">
          
          <div className="beers__wrapper">
            {beers.slice(0, 13).map((beer) => (
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
  );
}

export default Core;
