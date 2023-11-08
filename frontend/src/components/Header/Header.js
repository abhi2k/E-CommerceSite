import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { handleLogout } from "../CommonFunctions/CommonFunction";
import { Button } from "@mui/material";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import WestIcon from "@mui/icons-material/West";
import { NavContext } from "../../context/NavContext";
import "./Header.scss";

export default function Header() {
  const { expand, expandNav, collapseNav } = useContext(NavContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="header-component">
      <div className="logo-expand">
        <div className="expand-icon">
          {expand ? <WestIcon onClick={collapseNav}/> : <DragHandleIcon onClick={expandNav} />}
        </div>
        <div className="site-logo">Delhivery</div>
      </div>
      <div className="profile-section">
        <div className="user-name">{user}</div>
        <Button className="logout-btn" onClick={() => handleLogout(setUser)}>
          Logout
        </Button>
      </div>
    </div>
  );
}
