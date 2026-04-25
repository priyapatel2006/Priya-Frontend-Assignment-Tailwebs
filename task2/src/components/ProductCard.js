import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm border-0 product-card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h6 className="fw-bold mb-1">{product.name}</h6>
          <span className="badge bg-secondary mb-2">{product.category}</span>
          <p className="fw-bold text-danger mb-0">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}
