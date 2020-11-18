import XLSX from "xlsx";

export const readExcelFile = (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const parsedData = XLSX.read(data, { type: "array" });

      if (parsedData) {
        resolve(parsedData);
      } else {
        reject({ message: "Error reading file" });
      }
    };

    reader.readAsArrayBuffer(file);
  });
};

export const getSheetData = (workbook, sheetIndex) => {
  const name = workbook.SheetNames[sheetIndex];
  const sheet = workbook.Sheets[name];
  return XLSX.utils.sheet_to_json(sheet);
};

export const getSheetHeaders = (workbook, sheetIndex) => {
  const sheetData = getSheetData(workbook, sheetIndex);
  return Object.keys(sheetData[0]);
};

export const parseSheet = (workbook, sheetIndex, propMap) => {
  const sheetData = getSheetData(workbook, sheetIndex);

  const parsedData = sheetData.map((row) => {
    const newRow = {};
    Object.keys(propMap).forEach((key) => {
      newRow[key] = row[propMap[key]];
    });
    return newRow;
  });

  return parsedData;
};
