import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { filterData } from "../CommonFunctions/CommonFunction";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import { ProductsContext } from "../../context/ProductsContext";

export default function Dashboard({ contentRef }) {
  const { expand } = useContext(NavContext);
  const {products, fetchProducts} = useContext(ProductsContext);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText.trim()) {
      setSearchResults(filterData(products, searchText));
    } else {
      setSearchResults(products);
    }
  }, [searchText, products]);


  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div
      ref={contentRef}
      className={
        expand ? "dashboard-component-expand" : "dashboard-component-collapse"
      }
    >
      <div className="search-section">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className="search-text-field"
          placeholder="Type to search for products"
        />
      </div>
      <div className="content-section">
        {searchResults?.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
