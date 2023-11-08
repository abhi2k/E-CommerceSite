import React, { useContext, useEffect, useRef } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../ProductPage/ProductPage";
import { ProductsContext } from "../../context/ProductsContext";

export default function Home() {
  const contentRef = useRef();
  const navRef = useRef();
  const { products } = useContext(ProductsContext);

  useEffect(() => {
    // Set the height of child2 to match the height of child1
    if (contentRef.current && navRef.current) {
      const child1Height = contentRef.current.clientHeight;
      navRef.current.style.height = child1Height + "px";
    }
  }, [products]);

  return (
    <div className="home-page">
      <Header />
      <div className="navigation-dashboard">
        <Navigation navRef={navRef} />
        <Routes>
          <Route path="/" element={<Dashboard contentRef={contentRef} />} />
          <Route
            path="/product/:id"
            element={<ProductPage contentRef={contentRef} />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
