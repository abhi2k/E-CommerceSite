import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Login from "./Login";

export default function LoginComponent({ children }) {
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(user === null ? false : true);
  useEffect(() => {
    if (loggedIn === false) {
      if (localStorage.getItem("user") !== null) {
        setUser(localStorage.getItem("user"));
        setLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    setLoggedIn(user ? true : false);
  }, [user]);

  return loggedIn ? <React.Fragment>{children}</React.Fragment> : <Login />;
}
