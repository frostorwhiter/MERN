import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { PidrozdilContextProvaider } from './context/pidrozdilContext/PidrozdilContext';
import { TeacherContextProvaider } from "./context/teacherContext/TeacherContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PidrozdilContextProvaider>
        <TeacherContextProvaider>
        <App />
        </TeacherContextProvaider>
      </PidrozdilContextProvaider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
