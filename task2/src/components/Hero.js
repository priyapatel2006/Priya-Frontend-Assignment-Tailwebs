import React from "react";

export default function Hero() {
  return (
    <header id="hero" className="text-center text-white py-5">
      <div className="container">
        <h1 className="fw-bold display-5">Build Something Amazing</h1>
        <p className="mt-3 mb-4 mx-auto">
          We craft modern digital experiences that help businesses grow. Let us bring your ideas to life.
        </p>
        <a href="#products" className="btn btn-light fw-semibold px-4 py-2 rounded-pill btn-hero">
          Explore Products
        </a>
      </div>
    </header>
  );
}
