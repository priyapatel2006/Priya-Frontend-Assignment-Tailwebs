import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">tailwebs<span className="brand-dot">.</span></a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#cta">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
