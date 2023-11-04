import React from "react";
import "./Navigation.scss";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

export default function Navigation({navRef}) {
  const { expand } = useContext(NavContext);

  return (
    <div ref={navRef}
      className={
        expand ? "navigation-component-expand" : "navigation-component-collapse"
      }
    >
      
    </div>
  );
}
