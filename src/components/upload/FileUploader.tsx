import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import {
  ExcelColumn,
  generateValidators,
  isValidData,
  hasValidExcelColumnsMapping,
  convertExcelToJson,
  isExcelFile,
} from "./excelUtil";

interface FileUploaderProps {
  onFileUpload: (data: any) => void;
  columnsMapping: ExcelColumn[];
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileUpload,
  columnsMapping,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      // Check if the file is an Excel file
      if (isExcelFile(file)) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            // Parse Excel file
            const data = XLSX.read((e.target as any).result, {
              type: "binary",
            });

            if (!hasValidExcelColumnsMapping(data, columnsMapping)) {
              console.error(
                "Invalid data format in excel, please fix your file"
              );
              return;
            }
            const jsonData = convertExcelToJson(data);
            const jsonDataValidator = generateValidators(columnsMapping);
            const isValid = jsonData.every(function (element): boolean {
              const validJsonData = isValidData(element, jsonDataValidator);
              if (!validJsonData) {
                console.error("Error found in row ", { element });
              }
              return validJsonData;
            });
            if (!isValid) {
              console.error(
                "Invalid data format in excel, please fix your file"
              );
            } else {
              console.info("Valid Excel Data");
            }
            // Pass the JSON data to the parent component
            onFileUpload(jsonData);
          } catch (error) {
            console.error("Error parsing Excel file:", error);
          }
        };
        reader.readAsBinaryString(file);
      } else {
        console.error("Invalid file format. Please upload a valid Excel file.");
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  return (
    <>
      <ul>
        <p>Expected Column Mappings </p>
        {columnsMapping.map((item) => (
          <li key={item.columnName} style={{ display: "inline" }}>
            {item.columnName} - {item.dataType}
            {" | "}
          </li>
        ))}
      </ul>

      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the Excel file here ...</p>
        ) : (
          <p>Drag 'n' drop an Excel file here, or click to select one</p>
        )}
      </div>
    </>
  );
};

const dropzoneStyles: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: "2px",
  borderRadius: "4px",
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  cursor: "pointer",
};

export default FileUploader;
