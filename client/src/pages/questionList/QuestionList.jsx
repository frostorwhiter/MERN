import "./questionList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { questionRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function QuestionList() {
  const [data, setData] = useState(questionRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "question",
      headerName: "Факультети",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="questionListItem">
            {params.row.name}
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
            <Link to={"/question/" + params.row.id}>
              <button className="questionListEdit">Редагувати</button>
            </Link>
            <button className="questionListEdit">Огляд</button>
            <DeleteOutline
              className="questionListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="questionList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
