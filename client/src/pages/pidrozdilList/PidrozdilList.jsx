import "./pidrozdilList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PidrozdilContext } from "../../context/pidrozdilContext/PidrozdilContext";
import { deletePidrozdils, getPidrozdils } from "../../context/pidrozdilContext/apiCalls";
export default function PidrozdilList() {

    const { pidrozdils, dispatch } = useContext(PidrozdilContext);

    useEffect(() => {
        getPidrozdils(dispatch);
    },[dispatch]);

    const handleDelete = (id) => {
        deletePidrozdils(id, dispatch);
    };


  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "pidrozdils",
      headerName: "Факультети",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="pidrozdilListItem">
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
            <Link to={{ pathname: "/pidrozdils/" + params.row._id, pidrozdil: params.row }}>
              <button className="pidrozdilListEdit">Огляд</button>
            </Link>
            <button className="pidrozdilListEdit">Редагувати</button>
            <DeleteOutline
              className="pidrozdilListDelete"
              onClick={() => handleDelete(params.row._id)}
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
        rowsPerPageOptions={[5]}
        getRowId={(r) => r._id}
      />
    </div>
  );
}
