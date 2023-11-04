import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginComponent from "./pages/Login/LoginComponent";
import Home from "./pages/Home/Home";
export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <LoginComponent>
        <Home />
      </LoginComponent>
    </BrowserRouter>
  );
}
