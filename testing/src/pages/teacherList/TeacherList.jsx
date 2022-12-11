import "./teacherList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { TeacherContext } from "../../context/teacherContext/TeacherContext";
import { deleteTeachers, getTeachers } from "../../context/teacherContext/apiCalls";
export default function TeacherList() {
  const { teachers, dispatch } = useContext(TeacherContext);

  useEffect(() => {
      getTeachers(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
      deleteTeachers(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "teacher",
      headerName: "П.І.Б.",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="teacherListTeacher">
            {params.row.Teachername}
          </div>
        );
      },
    },
    {
      field: "pidrozdil",
      headerName: "Назва Факультету",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="teacherListTeacher">
            {params.row.name}
          </div>
        );},
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"Teacherrating/"+ params.row._id}>
              <button className="teacherListEdit">Огляд</button>
            </Link>
            <Link to={"/teacher/" + params.row._id}>
              <button className="teacherListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <div className="teacherList">
      <DataGrid
        rows={teachers}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
