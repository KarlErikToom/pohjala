import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink, NavHashLink } from "react-router-hash-link";
function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  function OpenMenu() {
    if (!menuRef.current.classList.contains("open__menu")) {
      menuRef.current.classList.add("open__menu");
    } else {
      menuRef.current.classList.remove("open__menu");
    }
    setMenuOpen((prev) => !prev);
  }
  function closeMenu() {
    if (menuRef.current.classList.contains("open__menu")) {
      menuRef.current.classList.remove("open__menu");
      document.body.classList.remove("no-scroll");
    }
    setMenuOpen((prev) => !prev);
  }
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);
  return (
    <>
      <aside>
        <nav>
          <ul className="nav__list">
            <li className="nav__link">
              <HashLink to={"/#hero"} className="nav__link--anchor">
                Core range
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink to={"/specials#specials"} className="nav__link--anchor">
                Specials
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink to={"/cellar#cellar"} className="nav__link--anchor">
                Cellar Series
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink to={"/forest#forest"} className="nav__link--anchor">
                Forest Series
              </HashLink>
            </li>
            <hr />
            <li className="nav__link">
              <HashLink to={"/taproom#top"} className="nav__link--anchor">
                Tap Room
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink to={"/brewery#top"} className="nav__link--anchor">
                Brewery
              </HashLink>
            </li>
            <li className="nav__link">
              <a href="https://shop.pohjalabeer.com/en" target="_blank" className="nav__link--anchor no">
                Shop
              </a>
            </li>
            <li className="nav__link">
              <HashLink to={"/ambassador#top"} className="nav__link--anchor">
                Ambassador
              </HashLink>
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
            <NavHashLink
              to={"/brewery#touch"}
              className="icon icon__hover"
              location={{
                pathname: document.location.pathname + document.location.hash,
              }}
            >
              Contact
            </NavHashLink>
            <p>©2023</p>
          </div>
        </div>
      </aside>
      <aside className="menu" ref={menuRef}>
        <nav>
          <ul className="nav__list">
            <li className="nav__link">
              <HashLink onClick={closeMenu} to={"/#hero"} className="nav__link--anchor">
                Core range
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/specials#specials"}
                className="nav__link--anchor"
              >
                Specials
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/cellar#cellar"}
                className="nav__link--anchor"
              >
                Cellar Series
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/forest#forest"}
                className="nav__link--anchor"
              >
                Forest Series
              </HashLink>
            </li>
            <hr />
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/taproom#top"}
                className="nav__link--anchor"
              >
                Tap Room
              </HashLink>
            </li>
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/brewery#top"}
                className="nav__link--anchor"
              >
                Brewery
              </HashLink>
            </li>
            <li className="nav__link">
              <a onClick={closeMenu} href="https://shop.pohjalabeer.com/en" target="_blank" className="nav__link--anchor no">
                Shop
              </a>
            </li>
            <li className="nav__link">
              <HashLink
                onClick={closeMenu}
                to={"/ambassador#top"}
                className="nav__link--anchor"
              >
                Ambassador
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="footer">
          <div className="footer__media">
            <a
              onClick={closeMenu}
              href="https://www.facebook.com/pohjalabeer"
              target="_blank"
            >
              <FontAwesomeIcon className="icon icon__hover" icon={faFacebook} />
            </a>
            <a
              onClick={closeMenu}
              href="https://www.instagram.com/pohjalabeer/"
              target="_blank"
            >
              <FontAwesomeIcon className="icon__hover" icon={faInstagram} />
            </a>
          </div>
          <div className="footer__links">
            <NavHashLink
              onClick={closeMenu}
              to={"/brewery#touch"}
              className="icon icon__hover"
              location={{
                pathname: document.location.pathname + document.location.hash,
              }}
            >
              Contact
            </NavHashLink>
            <p>©2023</p>
          </div>
        </div>
      </aside>
      <button className="menu__btn" onClick={OpenMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </>
  );
}

export default Nav;
