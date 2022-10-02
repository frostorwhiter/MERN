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

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Додаткове меню</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Оцінки
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Збережені результати
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin menu</h3>
          <ul className="sidebarList">
            <Link to="/teachers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Викладачі
              </li>
            </Link>
            <Link to="/pidrozdils" className="link">
              <li className="sidebarListItem">
                <AccountBalance className="sidebarIcon" />
                Факультети
              </li>
            </Link>
            <Link to="/groups" className="link">
              <li className="sidebarListItem">
                <AccountBalance className="sidebarIcon" />
                Групи
              </li>
            </Link>
            <Link to="/newPidrozdil" className="link">
              <li className="sidebarListItem">
                <AddCircle className="sidebarIcon" />
                Добавити новий факультет
              </li>
            </Link>
            <Link to="/newTeacher" className="link">
              <li className="sidebarListItem">
                <AddCircle className="sidebarIcon" />
                Добавити нового викладача
              </li>
            </Link>
            
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Звіт
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Опитування</h3>
          <ul className="sidebarList">
          <Link to="/Questions" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Питання
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
