import { globalFunc, htmlField, button, boxes } from "./config.js";

// -------------excelからjsonを作成するためのイベント-----------------
export let excelJson = {};

let selectedFile;

button.selectedFile.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
    globalFunc.clearNode(boxes.downloadBox);
    globalFunc.appealEnd(button.selectedFile);
    globalFunc.appealStart(button.input);
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
        globalFunc.clearNode(boxes.inputBox);
        globalFunc.displayBlock(htmlField.contentGroup);
        globalFunc.displayBlock(boxes.searchBox);
        globalFunc.appealEnd(button.input);
    };
});
