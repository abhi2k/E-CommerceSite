import React, { useState, createContext } from "react";
const NavContext = createContext();

const NavContextProvider = ({ children }) => {
  const [expand, setExpand] = useState(true);
  function expandNav() {
    setExpand(true)
  }
  function collapseNav() {
    setExpand(false)
  }
  return (
    <NavContext.Provider value={{ expand, expandNav, collapseNav }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavContextProvider };
