import React from "react";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="product-card-component" onClick={handleNavigate}>
      <img src={product.img} className="product-image" alt="not available" />
      <div className="product-details">
        <div className="name-price">
          <div className="product-name">{product.name}</div>
          <div className="product-price"> ${product.price}</div>
        </div>
        <div className="product-category">{product.category}</div>
        <div className="product-description">{product.description}</div>
      </div>
    </div>
  );
}
