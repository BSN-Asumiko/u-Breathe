import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="navbar-app">
        <div className="navbar-logo">
          <img
            src="/assets/icons/logo.png"
            alt="logo image"
            className="logo-image"
          />
        </div>
        <p className="navbar-name">u-Breathe</p>
      </div>
      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>
          <img
            src="/assets/icons/menu-icon.svg"
            alt="burger menu icon"
            className="menu-icon"
          />
        </button>
        <ul className={isOpen ? "menu open" : "menu"}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/app" onClick={closeMenu}>
              App
            </NavLink>
          </li>
          <li>
            <NavLink to="/legend" onClick={closeMenu}>
              Leyenda
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" onClick={closeMenu}>
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/form" onClick={closeMenu}>
              Formulario
            </NavLink>
          </li>
          <li>
            <NavLink to="/list" onClick={closeMenu}>
              Lista de enfermedades
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
