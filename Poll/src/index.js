import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { PidrozdilContextProvaider } from './context/pidrozdilContext/PidrozdilContext';
import { TeacherContextProvaider } from "./context/teacherContext/TeacherContext";
import { QuestionContextProvaider } from "./context/questionContext/QuestionContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
        <TeacherContextProvaider>
          <QuestionContextProvaider>
          <App />
          </QuestionContextProvaider>
        </TeacherContextProvaider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
