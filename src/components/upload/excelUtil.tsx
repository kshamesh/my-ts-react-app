import * as XLSX from "xlsx";

export interface ExcelColumn {
  columnName: string;
  dataType: "string" | "number" | "boolean" | "date";
}

type ValidationFunction = (value: string) => boolean;
type Validators = Record<string, ValidationFunction>;

export function isValidData(
  data: Record<string, string>,
  validators: Validators
): boolean {
  const keys = Object.keys(data);
  if (keys.length !== Object.keys(validators).length) {
    return false;
  }
  return keys.every((key) => validators[key](data[key]));
}

export function generateValidators(data: ExcelColumn[]): Validators {
  const validators: Validators = {};
  data.forEach((item) => {
    switch (item.dataType) {
      case "string":
        validators[item.columnName] = (value) =>
          typeof value === "string" && value.length > 0;
        break;
      case "number":
        validators[item.columnName] = (value) => !isNaN(Number(value));
        break;
      case "date":
        validators[item.columnName] = (value) => !isNaN(Date.parse(value));
        break;
      case "boolean":
        validators[item.columnName] = (value) =>
          value.toLowerCase() === "true" ||
          value.toLowerCase() === "false" ||
          value.toLowerCase() === "yes" ||
          value.toLowerCase() === "no";
        break;
      // Add more cases as needed for different data types
      default:
        validators[item.columnName] = (value) => true; // Default validator
    }
  });
  return validators;
}

export const hasValidExcelColumnsMapping = (
  workbook: XLSX.WorkBook,
  columns: ExcelColumn[]
): boolean => {
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const headerRow = XLSX.utils.sheet_to_json(sheet, {
    header: 1,
  })[0] as any;
  const columnsToMap = columns.map((s) => s.columnName.trim());
  if (
    !arraysEqual(
      headerRow.map((s: any) => s.trim()),
      columnsToMap
    )
  ) {
    console.log(
      "Excel file format is different than specified in column mapping"
    );
    return false;
  }
  return true;
};

export function convertExcelToJson(data: XLSX.WorkBook) {
  const sheetName = data.SheetNames[0];
  const sheet = data.Sheets[sheetName];

  // Convert sheet to JSON
  const jsonData = XLSX.utils.sheet_to_json(sheet, {
    raw: false,
  }) as Record<string, string>[];
  return jsonData;
}

export function isExcelFile(file: File): boolean {
  // Extract the file extension from the name property
  const fileExtension = file.name.split(".").pop()?.toLowerCase();

  // Check if the file extension indicates an Excel file
  return fileExtension === "xlsx" || fileExtension === "xls";
}

const arraysEqual = (arr1: string[], arr2: string[]) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
};
