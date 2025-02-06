import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./App.css";
import { useState } from "react";

// Register the ClientSideRowModelModule with the ModuleRegistry.
ModuleRegistry.registerModules([ClientSideRowModelModule]);

function App() {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make", headerName: "Company" },
    { field: "model" },
    {
      field: "price",
      valueFormatter: (p) => "$" + p.value.toLocaleString(),
    },
    { field: "electric" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ width: "100%", height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs}></AgGridReact>
    </div>
  );
}

export default App;
