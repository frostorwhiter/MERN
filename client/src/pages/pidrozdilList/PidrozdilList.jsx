import "./pidrozdilList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { pidrozdilRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect } from "react";

import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext";
import { deletePidrozdils, getPidrozdils } from "../../context/pidrozdilContext/apiCalls";
export default function PidrozdilList() {
  const { pidrozdils, dispatch } = useContext(PidrozdilContext);

  useEffect(() => {
      getPidrozdils(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
      deletePidrozdils(id, dispatch);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "pidrozdil",
      headerName: "Факультети",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="pidrozdilListItem">categorie
            <img className="pidrozdilListImg" src={params.row.img} alt="" />
            {params.row.name}
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
            <Link to={"/pidrozdil/" + params.row.id}>
              <button className="pidrozdilListEdit">Огляд</button>
            </Link>
            <button className="pidrozdilListEdit">Редагувати</button>
            <DeleteOutline
              className="pidrozdilListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  return (
    <div className="pidrozdilList">
      <DataGrid
        rows={pidrozdils}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
