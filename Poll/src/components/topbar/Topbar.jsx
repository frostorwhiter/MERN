import React from "react";
import "./topbar.css";
import { NotificationsNone, Timeline, Language, Settings, Logout,ExitToApp,} from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Topbar() {
  const { dispatch } = useContext(AuthContext); 
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ПНУ Опитування</span>
        </div>
        
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <li className="topRight">
            <ExitToApp className="topbarIconContainer" onClick={ () => dispatch({ type: "LOGOUT" })} />
          </li>
        </div>
      </div>
    </div>
  );
};

