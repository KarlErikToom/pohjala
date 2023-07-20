import React from "react";
import TapHero from "../components/TapHero";
import TapTapRoom from "../components/TapTapRoom";
import Tours from "../components/Tours";
import Shop from "../components/Shop";
import Sauna from "../components/Sauna";
import TapRoomNav from "../components/TapRoomNav";

function TapRoom() {
  return (
    <>
    <TapRoomNav />
    <TapHero />
    <TapTapRoom />
    <Tours />
    <Shop />
    <Sauna />
    </>
  );
}

export default TapRoom;
