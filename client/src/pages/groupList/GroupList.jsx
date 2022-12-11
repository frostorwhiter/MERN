import "./groupList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { groupRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react'
import { useContext, useEffect } from "react";
import { GroupContext } from "../../context/groupContext/GroupContext";
import { deleteGroups, getGroups } from "../../context/groupContext/apiCalls";
export default function GroupList() {
  const { groups, dispatch } = useContext(GroupContext);

  useEffect(() => {
      getGroups(dispatch);
  },[dispatch]);

  const handleDelete = (id) => {
      deleteGroups(id, dispatch);
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "group",
      headerName: "Група",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="groupListItem">
            {params.row.groupname}
          </div>
        );
      },
    },
    
    
    
    {
      field: "action",
      headerName: "Дії",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/group/" + params.row.id}>
              <button className="groupListEdit">Редагувати</button>
            </Link>
            <button className="groupListEdit">Огляд</button>
            <DeleteOutline
              className="groupListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="groupList">
      <DataGrid
        rows={groups}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
