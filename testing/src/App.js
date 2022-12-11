import './App.css';
import Topbar from "./components/topbar/Topbar";
import React from 'react'
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import TeacherList from "./pages/teacherList/TeacherList";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { group } = useContext(AuthContext);
    if (!group) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/">         
          <Route path="login" element={<Login/>} />
          <Route path="teachers" element={<ProtectedRoute><TeacherList/></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
    
  );
}
export default App;
