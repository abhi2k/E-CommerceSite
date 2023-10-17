import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { productsData } from "../../CommonFunctions/productData";
import { filterData } from "../../CommonFunctions/CommonFunction";
import ProductCard from "./ProductCard/ProductCard";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(productsData);

  useEffect(() => {
    if (searchText.trim()) {
      setSearchResults(filterData(productsData, searchText));
    } else {
      setSearchResults(productsData);
    }
  }, [searchText]);

  return (
    <div className="dashboard-component">
      <div className="search-section">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className="search-text-field"
          placeholder="Type to search for products"
        />
      </div>
      <div className="content-section">
        {searchResults.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
