import "./questionList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { questionRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { QuestionContext } from "../../context/questionContext/QuestionContext";
import { deleteQuestions, getQuestions } from "../../context/questionContext/apiCalls";
export default function QuestionList() {
  const { questions, dispatch } = useContext(QuestionContext);

  useEffect(() => {
      getQuestions(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
      deleteQuestions(id, dispatch);
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
            <Link to={"/question/" + params.row._id}>
              <button className="questionListEdit">Редагувати</button>
            </Link>
            <DeleteOutline
              className="questionListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="questionList">
      <DataGrid
        rows={questions}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        getRowId={(r) => r._id}/>
    </div>
  );
}
