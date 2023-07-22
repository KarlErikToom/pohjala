import React from "react";
import BreweryHero from "../components/BreweryHero";
import BreweryImages from "../components/BreweryImages";
import Team from "../components/Team";
import BreweryNav from "../components/BreweryNav";

function Brewery() {
  return (
    <>
      <BreweryNav />
      <BreweryHero />
      <BreweryImages />
      <Team />
    </>
  );
}

export default Brewery;
