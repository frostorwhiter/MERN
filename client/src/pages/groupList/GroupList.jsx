import "./groupList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { groupRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function GroupList() {
  const [data, setData] = useState(groupRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "group",
      headerName: "Група",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="groupListItem">
            <img className="groupListImg" src={params.row.img} alt="" />
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
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
