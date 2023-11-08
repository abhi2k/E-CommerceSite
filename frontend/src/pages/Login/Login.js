import React, { useContext, useState } from "react";
import "./Login.scss";
import { Box, TextField, Button } from "@mui/material";
import { UserContext } from "../../context/UserContext";
import { validatePassword } from "../../components/CommonFunctions/CommonFunction";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  function handleLogin() {
    if (userName && userName.trim() !== "") {
      if (validatePassword(password)) {
        localStorage.setItem("user", userName);
        setUser(userName);
      }
    } else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div className="login-container">
      <Box className="login-box">
        <div className="user-name">
          <TextField
            className="login-input-field"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            label="Username"
            variant="outlined"
          />
        </div>
        <div className="password">
          <TextField
            placeholder="password"
            className="login-input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
          />
        </div>
        <div className="login-btn-container">
          <Button
            className="login-btn"
            onClick={(e) => handleLogin(e.target.value)}
          >
            {" "}
            Login{" "}
          </Button>
        </div>
      </Box>
    </div>
  );
}
