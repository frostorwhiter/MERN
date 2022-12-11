import "./questionList.css";
import { DataGrid } from "@material-ui/data-grid";
import { useContext, useEffect } from "react";
import { QuestionContext } from "../../context/questionContext/QuestionContext";
import {  getQuestions,createQuestions ,setQuestion} from "../../context/questionContext/apiCalls";
import { useState } from "react";
export default function QuestionList() {

  const { questions, setQuestion} = useState(null);
  const { dispatch } = useContext(QuestionContext)

  useEffect(() => {
      getQuestions(dispatch);
  },[dispatch]);




  const handleChange = (e) => {
    const value = e.target.value;
    setQuestion({ ...questions, [e.target.name]: value });
};


  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestions(questions, dispatch)
};

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    
    {
      field: "question",
      headerName: "Питання",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="questionListItem">
            {params.row.Questiontitle}
          </div>
        );
      },
    },
    
    { field: "stock", headerName: "Тип питання", width: 200 },
    
    {
      field: "action",
      headerName: "Дії",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <input type="number" placeholder="0-100" name="answer" onChange={handleChange}/>
          </>
        );
      },
    },
  ];
  
  return (

    <div className="questionList">
      <div className="Poll"><button className="teacherUpdateButton" onClick={handleSubmit} >Пройти опитування</button></div>
      <DataGrid
        rows={questions}
        columns={columns}
        pageSize={15}
        getRowId={(r) => r._id}
      />
      
    </div>
  );
}
