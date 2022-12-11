
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { hotelColumns, roomColumns, groupColumns } from "./datatablesource";
import TeacherList from "./pages/teacherList/TeacherList";
import { AuthContext } from "./context/AuthContext";
import QuestionList from "./pages/questionList/QuestionList";

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
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route path="/">
            <Route path="login" element={<Login/>} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>}> 
            </Route>
            <Route path="/teachers" element={<ProtectedRoute><TeacherList /></ProtectedRoute>}>
            </Route>
            <Route path="teachers/poll/:teacherId" element={<ProtectedRoute><QuestionList/></ProtectedRoute>}>
            </Route>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
