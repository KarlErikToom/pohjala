import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <aside>
      <nav>
        <ul className="nav__list">
          <li className="nav__link">
            <Link to={"/"} className="nav__link--anchor">
              Core range
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/specials"} className="nav__link--anchor">
              Specials
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/cellar"} className="nav__link--anchor">
              Cellar Series
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/forest"} className="nav__link--anchor">
              Forest Series
            </Link>
          </li>
          <hr />
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Tap Room
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Brewery
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Shop
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Ambassador
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Nav;
