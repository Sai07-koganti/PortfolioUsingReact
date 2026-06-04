import React from "react";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-warning shadow sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-warning" href="#"style={{ fontFamily: "cursive" }}>
        Sai Koganti
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
             <a className="nav-link text-light fw-semibold" href="#about">
              About
             </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#skills">
              Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#projects">
              Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#contact">
            Contact
          </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;