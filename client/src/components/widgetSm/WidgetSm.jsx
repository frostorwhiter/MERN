import "./widgetSm.css";
import { DataGrid } from "@material-ui/data-grid";
import { pidrozdilRows } from "../../dummyData";
import { useState } from "react";

export default function PidrozdilList() {
  const [data, setData] = useState(pidrozdilRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "№", width: 90 },
    {
      field: "pidrozdil",
      headerName: "Питання",
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
      field: "status",
      headerName: "Середня оцінка",
      width: 200,
    },
    {
      field: "price",
      headerName: "Всі Оцінки",
      width: 200,
    },
    
  ];
  return (
    <div className="pidrozdilList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={0}
        checkboxSelection
      />
    </div>
  );
}
