import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Dashboard from "../../components/Dashboard/Dashboard";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="navigation-dashboard">
        <Navigation />
        <Dashboard />
      </div>
    </div>
  );
}
