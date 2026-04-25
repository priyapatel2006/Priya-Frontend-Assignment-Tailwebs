import React, { useState, useEffect } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // API fetch with loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productsData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = ["All", ...new Set(productsData.map(p => p.category))];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Latest at eGov</h2>
        <p className="text-center text-muted mb-4">Browse our latest products</p>

        {/* Search & Filter */}
        <div className="row g-2 mb-4 justify-content-center">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-danger" role="status"></div>
            <p className="mt-2 text-muted">Loading products...</p>
          </div>
        )}

        {/* No Results */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-5">
            <h5 className="text-muted">No results found</h5>
            <p className="text-muted">Try a different search or category.</p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && filtered.length > 0 && (
          <div className="row g-4">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
