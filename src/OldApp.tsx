import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { GreetFunctionJS } from "./components/GreetFunctionJS";
import { GreetFunctionTS } from "./components/GreetFunctionTS";
import ToggleText from "./components/ToggleText";
import { Counter } from "./components/Counter";
import { UsersList } from "./components/users/UsersList";
import FileUploader from "./components/upload/FileUploader";
import { ExcelColumn } from "./components/upload/excelUtil";

function OldApp() {
  const handleFileUpload = (data: any) => {
    console.log("Uploaded Excel data:", data);
    // You can now process the Excel data as needed
  };
  // Define your columns and their data types
  const columnsMapping1: ExcelColumn[] = [
    { columnName: "CustomerID", dataType: "number" },
    { columnName: "FirstName", dataType: "string" },
    { columnName: "LastName", dataType: "string" },
    { columnName: "Email", dataType: "string" },
    { columnName: "Phone", dataType: "string" },
    { columnName: "Address", dataType: "string" },
    // Add more columns as needed
  ];

  const columnsMapping2: ExcelColumn[] = [
    { columnName: "OrderID", dataType: "number" },
    { columnName: "Product", dataType: "string" },
    { columnName: "Quantity", dataType: "number" },
    { columnName: "UnitPrice", dataType: "number" },
    { columnName: "Customer", dataType: "string" },
    { columnName: "OrderDate", dataType: "date" },
    { columnName: "Delivered", dataType: "boolean" },
    // Add more columns as needed
  ];

  return (
    <>
      <div>
        <h1>Excel File Uploader 1</h1>
        <FileUploader
          onFileUpload={handleFileUpload}
          columnsMapping={columnsMapping1}
        />
      </div>
      <div>
        <h1>Excel File Uploader 2</h1>
        <FileUploader
          onFileUpload={handleFileUpload}
          columnsMapping={columnsMapping2}
        />
      </div>
    </>
  );
}

export default OldApp;
