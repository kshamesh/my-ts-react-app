import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import NumberModeSwitcher from "./NumberModeSwitcher";
import NumberValueRenderer from "./NumberValueRenderer";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const GridComponent: React.FC = () => {
  const gridRef = useRef<
    AgGridReact<{
      customerName: string;
      customerCity: string;
      tradeValue: number;
    }>
  >(null);

  const columnDefs: ColDef[] = [
    { field: "customerName", headerName: "Customer Name" },
    { field: "customerCity", headerName: "Customer City" },
    {
      field: "tradeValue",
      headerName: "Trade Value",
      cellRenderer: NumberValueRenderer,
    },
  ];

  const rowData = [
    {
      customerName: "John Doe",
      customerCity: "New York",
      tradeValue: 12345678,
    },
    {
      customerName: "Jane Smith",
      customerCity: "Los Angeles",
      tradeValue: 987654,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <NumberModeSwitcher />
      <AgGridReact ref={gridRef} rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default GridComponent;
