import "./teacherList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { teacherRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TeacherList() {
  const [data, setData] = useState(teacherRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "teacher",
      headerName: "П.І.Б.",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="teacherListTeacher">
            <img className="teacherListImg" src={params.row.avatar} alt="" />
            {params.row.teachername}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "transaction",
      headerName: "Назва Факультету",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"Teacherrating/"+ params.row.id}>
              <button className="teacherListEdit">Огляд</button>
            </Link>
            <Link to={"/teacher/" + params.row.id}>
              <button className="teacherListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="teacherListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="teacherList">
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
