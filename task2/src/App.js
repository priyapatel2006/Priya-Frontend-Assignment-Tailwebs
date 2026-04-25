import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductList />
      <CTA />
      <Footer />
    </>
  );
}
