import React from "react";
import Logo from "../assets/pohjala-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <aside>
        <figure className="logo__figure">
            <a href=""> <img  src={Logo} alt="" className="logo__img" /></a>
        </figure>
      <nav>
        <ul className="nav__list">
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Core range
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Specials
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Cellar Series
            </a>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Forest Series
            </a>
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
