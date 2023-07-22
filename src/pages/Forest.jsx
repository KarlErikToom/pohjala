import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/pohjala-logo (1).png";
import { Link } from "react-router-dom";

function Forest() {
    const [beers, setBeers] = useState([]);
    async function getData() {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers?page=4");
      setBeers(data);
    }
    useEffect(() => {
      getData();
    }, []);
  return (
    <div>

    <section id="forest">
        <figure className="specials__logo">
          <Link to={"/"}>
            {" "}
            <img className="specials__logo--img" src={Logo} alt="" />{" "}
          </Link>
        </figure>
      <div className="forest__text">
        <h1>
          The forest has a deep influence on Estonian culture and cuisine. This
          heritage is embodied in our Forest Series. <br /> <br /> In these editions, we twist
          rare botanicals, forest ingredients and Estonian folk-medicine with
          ancient methods into absolutely extraordinary beers.
        </h1>
      </div>
    </section>
     <section id="special__beer">
     <div className="container">
       <div className="row">
         <div className="beers__wrapper">
           {beers.slice(0, 25).map((beer, index) => (
               <div key={beer.id} className="beer">
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
                     {index % 6 === 4 &&(<span className="discontinued">sold out </span>)}
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

export default Forest;
