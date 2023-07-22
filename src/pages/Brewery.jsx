import React from "react";
import BreweryHero from "../components/BreweryHero";
import BreweryImages from "../components/BreweryImages";
import Team from "../components/Team";
import TapRoomNav from "../components/TapRoomNav";
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
