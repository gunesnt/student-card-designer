import XLSX from "xlsx";

const readExcelFile = (file) => {
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

export default readExcelFile;
