import React, {useState, useEffect} from "react";
import Logo from "../assets/pohjala-logo (1).png"
import axios from "axios";
import { Link } from "react-router-dom";

function Cellar() {
    const [beers, setBeers] = useState([]);
    async function getData() {
      const { data } = await axios.get("https://api.punkapi.com/v2/beers?page=3");
      setBeers(data);
    }
    useEffect(() => {
      getData();
    }, []);
  return (
    <div>

    <section id="cellar">
        <figure className="specials__logo">
          <Link to={"/"}>
            {" "}
            <img className="specials__logo--img" src={Logo} alt="" />{" "}
          </Link>
        </figure>
      <div className="cellar__text">
        <h1>
          We love bold, dark, barrel-aged beers. <br /> <br /> In the Cellar Series, we
          unleash our passion for ever deeper layers of oily, velvety, liquid
          goodness. <br /> <br /> We use a variety of bourbon, cognac, sherry, and tequila
          barrels to age our unusual creations and create unique tastes by
          blending several distinctly different beers aged in complementary
          casks.
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
                     {index % 4 === 3 &&(<span className="discontinued">Seasonal </span>)}
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

export default Cellar;
