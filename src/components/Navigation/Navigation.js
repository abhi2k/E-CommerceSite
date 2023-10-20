import React from "react";
import "./Navigation.scss";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

export default function Navigation() {
  const { expand } = useContext(NavContext);

  return (
    <div
      className={
        expand ? "navigation-component-expand" : "navigation-component-collapse"
      }
    >
      Navigation
    </div>
  );
}
