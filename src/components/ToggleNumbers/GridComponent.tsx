import React, { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import DisplayModeSwitcher from "./DisplayModeSwitcher";
import ValueRenderer from "./ValueRenderer";
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

  // Defining the column definitions to match ag-Grid's types
  const columnDefs: ColDef[] = [
    { field: "customerName", headerName: "Customer Name" },
    { field: "customerCity", headerName: "Customer City" },
    {
      field: "tradeValue",
      headerName: "Trade Value",
      cellRenderer: ValueRenderer,
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
      <DisplayModeSwitcher />
      <AgGridReact ref={gridRef} rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default GridComponent;
