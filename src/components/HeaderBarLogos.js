import React from 'react';
import { NavLink } from 'react-router-dom';
import Allata from '../allata-squarelogo-1582038994233.png'

const HeaderBarLogos = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://allata.com/"
      target="_blank"
      rel="noopener noreferrer"
    > 
    <img src={Allata} alt="Logo" aria-hidden="true"/>
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <span className="tour">TOUR</span>
      <span className="of">OF</span>
      <span className="heroes">HEROES</span>
    </NavLink>
    <button
      className="link navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>
);

export default HeaderBarLogos;