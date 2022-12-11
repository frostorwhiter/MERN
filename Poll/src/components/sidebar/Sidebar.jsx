import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  AccountBalance,
  BarChart,
  MailOutline,
  AddCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from 'react'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin menu</h3>
          <ul className="sidebarList">
            <Link to="/teachers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Викладачі
              </li>
            </Link>
            </ul>
        </div>
        <div className="sidebarMenu"> 
        </div>
      </div>
    </div>
  );
}
