import React, { useState, createContext } from "react";
const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/products", requestOptions)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("error", error));
  };
  
  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
