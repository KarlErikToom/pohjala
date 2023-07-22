import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavHashLink } from "react-router-hash-link";
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
            <Link to={"/taproom"} className="nav__link--anchor">
              Tap Room
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/brewery"} className="nav__link--anchor">
              Brewery
            </Link>
          </li>
          <li className="nav__link">
            <a href="" className="nav__link--anchor">
              Shop
            </a>
          </li>
          <li className="nav__link">
            <Link to={"/ambassador"} className="nav__link--anchor">
              Ambassador
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer">
        <div className="footer__media">
          <a href="https://www.facebook.com/pohjalabeer" target="_blank">
            <FontAwesomeIcon className="icon icon__hover" icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/pohjalabeer/" target="_blank">
            <FontAwesomeIcon className="icon__hover" icon={faInstagram} />
          </a>
        </div>
        <div className="footer__links">
          <NavHashLink to={"/brewery#touch"} className="icon icon__hover">Contact</NavHashLink>
          <p>©2023</p>
        </div>
      </div>
    </aside>
  );
}

export default Nav;
