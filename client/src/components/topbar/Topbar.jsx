import React from "react";
import "./topbar.css";
import { NotificationsNone, Timeline, Language, Settings, Logout,ExitToApp,} from "@material-ui/icons";
export default function Topbar() {
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
            <ExitToApp className="topbarIconContainer" />
          </li>
        </div>
      </div>
    </div>
  );
}
