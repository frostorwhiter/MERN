import "./pidrozdilList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { pidrozdilRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PidrozdilList() {
  const [data, setData] = useState(pidrozdilRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "pidrozdil",
      headerName: "Факультети",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="pidrozdilListItem">
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
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
