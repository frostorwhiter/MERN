import "./newQuestion.css";
import React from 'react'
import { useContext, useState } from "react"
import { createQuestions } from "../../context/questionContext/apiCalls"
import { QuestionContext } from "../../context/questionContext/QuestionContext"

export default function NewQuestion() {
const [questions, setQuestion] = useState(null)
  const { dispatch } = useContext(QuestionContext)
  const handleChange = (e) => {
      const value = e.target.value;
      setQuestion({ ...questions, [e.target.name]: value });
  };
  console.log(questions);
  const handleSubmit = (e) => {
      e.preventDefault();
      createQuestions(questions, dispatch)
  };
  return (
    <div className="newQuestion">
      <h1 className="newQuestionTitle">New Question</h1>
      <form className="newQuestionForm">
        <div className="newQuestionItem">
          <label>Questionname</label>
          <input type="text" placeholder="" name="Questiontitle" onChange={handleChange}/></div>
        <button className="newQuestionButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
