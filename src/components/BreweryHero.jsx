import React from "react";
import Logo from "../assets/pohjala-logo (1).png";
import { Link } from "react-router-dom";
import BreweryNav from "../components/BreweryNav"

function BreweryHero() {
  return (
    <section id="brewery">
      <BreweryNav />
      <div className="container">
        <div className="row">
          <figure className="logo__figure" id="top">
            <Link to={"/"}>
              <img src={Logo} alt="" className="logo__img" />
            </Link>
          </figure>
          <div className="brewery__wrapper">
            <div className="brewery__text">
              <h1 className="section__header">
                Põhjala was founded in Tallinn, Estonia at the end of 2011 by
                four Estonian beer enthusiasts and home brewers.
              </h1>
              <p className="section__para">
                Soon thereafter the company was joined by a Scottish head
                brewer, Chris Pilkington, with a few years of Brewdog experience
                under his belt. <br />
                <br />
                The first Põhjala beer, Öö Imperial Baltic Porter, was released
                in the beginning of 2013 and for most of that year, our beers
                were contract-brewed in other breweries’ production facilities
                while we prepared to open our own. Construction of our first
                brewery was completed in April 2014 in Tallinn’s Nõmme district.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreweryHero;
