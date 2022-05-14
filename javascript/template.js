import { htmlField, replacing, tableParts } from './config.js';
// 受け取ったシート名を引数にとり、テンプレートを返す

export const createContentTableHeaders = (contentJson) => {
    // カラムごとの項目の配列
    const columnsArray = Object.keys(contentJson[0]);
    let tableHeaderRow = document.createElement('tr'); 
    let tableContentIndex = document.createElement('th');
    tableContentIndex.innerText = "#";
    tableHeaderRow.appendChild(tableContentIndex);
    for(let i = 0; i < columnsArray.length; i++){
        tableHeaderRow.innerHTML += `
            <th scope="col">${columnsArray[i]}</th>
        `;
    };
    tableParts.tableHeaders.appendChild(tableHeaderRow);
};

export const createContentTableBody = (contentJson) => {
    // カラムごとの項目の配列
    const columnsArray = Object.keys(contentJson[0]);
    for(let i = 1; i < contentJson.length; i++){
        let tableBodyRow = document.createElement('tr');
        tableBodyRow.classList.add('content-numbers');
        let tableBodyIndex = document.createElement('th');
        tableBodyIndex.innerText = `${i}`;
        tableBodyRow.appendChild(tableBodyIndex);
        for(let j = 0; j < columnsArray.length; j++){
            if(contentJson[i][columnsArray[j]] === undefined){
                contentJson[i][columnsArray[j]] = "";
            };
            tableBodyRow.innerHTML += `
                <td>${contentJson[i][columnsArray[j]]}</td>
            `;
        };
        tableParts.tableBody.appendChild(tableBodyRow);
    };
    for(let i = 0; i < htmlField.contentTable.querySelectorAll('.content-numbers').length; i++){
        htmlField.contentTable.querySelectorAll('.content-numbers')[i].addEventListener("click", () => {
            replacing.displayNone(htmlField.contentTable);
            replacing.displayBlock(htmlField.content);
        });
    };
};