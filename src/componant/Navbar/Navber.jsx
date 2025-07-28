import React from 'react';

const Navber = () => {
    return (
        <div>
            <nav className="navbar position-fixed top-0 end-0 start-0 navbar-expand-sm navbar-dark py-3">
    <div className="container">
      {/* Brand on the left */}
      <a className="navbar-brand fw-bold h1 fs-2"  href="/">
        START FRAMEWORK
      </a>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Navbar links aligned to the right */}
      <div className="collapse navbar-collapse justify-content-end" id="mainNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <a className="nav-link" href="about">ABOUT</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="portfolio">PORTFOLIO</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </div>
    );
}

export default Navber;
