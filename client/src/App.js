import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";
import PidrozdilList from "./pages/pidrozdilList/PidrozdilList";
import Pidrozdil from "./pages/pidrozdil/Pidrozdil";
import NewPidrozdil from "./pages/newPidrozdil/NewPidrozdil";
import NewTeacher from "./pages/newTeacher/NewTeacher";
import Question from "./pages/question/Question"
import QuestionList from "./pages/questionList/QuestionList"
import Group from "./pages/group/Group";
import GroupList from "./pages/groupList/GroupList";
import Teacherrating from "./pages/teacherrating/Teacherrating";
import { AuthContext } from "./context/AuthContext";

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
            <Route path="teacherrating" element={<Teacherrating />}>
            </Route>
            <Route path="group" element={<ProtectedRoute><Group /></ProtectedRoute>}>
            </Route>
            <Route path="groups" element={<ProtectedRoute><GroupList /></ProtectedRoute>}></Route>
            <Route path="teachers" element={<ProtectedRoute><TeacherList /></ProtectedRoute>}>
            </Route>
            <Route path="teacher/:teacherId" element={<ProtectedRoute><Teacher /></ProtectedRoute>}>
            </Route>
            <Route path="newTeacher" element={<ProtectedRoute><NewTeacher /></ProtectedRoute>}>
            </Route>
            <Route path="pidrozdils" element={<ProtectedRoute><PidrozdilList /></ProtectedRoute>}>
            </Route>
            <Route path="pidrozdil/:pidrozdilId" element={<ProtectedRoute><Pidrozdil /></ProtectedRoute>}>
            </Route>
            <Route path="newpidrozdil" element={<ProtectedRoute><NewPidrozdil /></ProtectedRoute>}>
            </Route>
            <Route path="Question" element={<ProtectedRoute><Question /></ProtectedRoute>}>
            </Route>
            <Route path="Questions" element={<ProtectedRoute><QuestionList /></ProtectedRoute>}>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
