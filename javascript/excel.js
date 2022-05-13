import Content from './content.js';

// -------------excelからjsonを作成するためのイベント-----------------
let selectedFile;
const config = {
    inputFile: "",
}

document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
});

document.getElementById('button').addEventListener("click", () => {
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, {type: "binary"})
            for(let i = 0; i < workbook.SheetNames.length; i++){
                let sheetName = workbook.SheetNames[i];
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                Content.contentJson[sheetName] = rowObject;
            };
        };
    };
});