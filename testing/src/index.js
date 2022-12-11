import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { TeacherContextProvaider} from "./context/teacherContext/TeacherContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TeacherContextProvaider>
        <App/>
      </TeacherContextProvaider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
