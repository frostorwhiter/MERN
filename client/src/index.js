import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { PidrozdilContextProvaider } from './context/pidrozdilContext/PidrozdilContext';
import { TeacherContextProvaider } from "./context/teacherContext/TeacherContext";
import { QuestionContextProvaider } from "./context/questionContext/QuestionContext";
import { GroupContextProvaider } from "./context/groupContext/GroupContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PidrozdilContextProvaider>
        <TeacherContextProvaider>
          <QuestionContextProvaider>
            <GroupContextProvaider>
          <App />
          </GroupContextProvaider>
          </QuestionContextProvaider>
        </TeacherContextProvaider>
      </PidrozdilContextProvaider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
