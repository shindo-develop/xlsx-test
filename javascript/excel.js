import { globalFunc, htmlField, button } from "./config.js";

// -------------excelからjsonを作成するためのイベント-----------------
export let excelJson = {};

let selectedFile;

button.selectedFile.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
});

button.input.addEventListener("click", () => {
    if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, { type: "binary" });
            for (let i = 0; i < workbook.SheetNames.length; i++) {
                let sheetName = workbook.SheetNames[i];
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                excelJson[sheetName] = rowObject;
            };
            globalFunc.displayNone(htmlField.info);
        };
    };
});
