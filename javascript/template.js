import { globalFunc, htmlField, isExport, tableParts } from './config.js';
// 受け取ったシート名を引数にとり、テンプレートを返す

export const createContentTable = (contentName, contentJson) => {
    let contentTitle = document.getElementById('content-name');
    contentTitle.innerText = `${contentName}`;
    // カラムごとの項目の配列
    if(isExport.contentTable){
        // クリア関数を呼んでisExport.contentTable = falseにする
        globalFunc.clearNode(tableParts.tableHeaders);
        globalFunc.clearNode(tableParts.tableBody);
        isExport.contentTable = false;
        globalFunc.changeCurrentPage("contentGroup", "contentTable");
    };
    const columnsArray = Object.keys(contentJson[0]);
    let tableHeaderRow = document.createElement('tr');
    let tableContentIndex = document.createElement('th');
    tableContentIndex.innerText = "#";
    tableHeaderRow.appendChild(tableContentIndex);
    for(let i = 0; i < 3; i++){
        tableHeaderRow.innerHTML += `
            <th scope="col">${columnsArray[i]}</th>
        `;
    };
    tableParts.tableHeaders.appendChild(tableHeaderRow);
    for(let i = 1; i < contentJson.length; i++){
        let tableBodyRow = document.createElement('tr');
        tableBodyRow.classList.add('content-row');
        let tableBodyIndex = document.createElement('th');
        tableBodyIndex.classList.add('content-numbers');
        tableBodyIndex.innerText = `${i}`;
        tableBodyRow.appendChild(tableBodyIndex);
        for(let j = 0; j < 3; j++){
            let tableBodyRowClass = "";
            let contentText;
            switch(j){
                case 0:
                    tableBodyRowClass = "content-day";
                    contentText = globalFunc.getDay(contentJson[i][columnsArray[j]]);
                    break;
                case 1:
                    tableBodyRowClass = "content-title";
                    contentText = contentJson[i][columnsArray[j]];
                    break;
                case 2:
                    tableBodyRowClass = "content-detail";
                    contentText = contentJson[i][columnsArray[j]];
                    break;
            };
            if(contentJson[i][columnsArray[j]] === undefined){
                contentJson[i][columnsArray[j]] = "";
            };
            tableBodyRow.innerHTML += `
                <td class=${tableBodyRowClass}>${contentText}</td>
            `;
        };
        tableParts.tableBody.appendChild(tableBodyRow);
    };
    for(let i = 0; i < htmlField.contentTable.querySelectorAll('.content-row').length; i++){
        htmlField.contentTable.querySelectorAll('.content-row')[i].addEventListener("click", (event) => {
            globalFunc.displayNone(htmlField.contentTable);
            globalFunc.displayBlock(htmlField.content);
            let contentNumber = event.composedPath()[1].querySelector(".content-numbers").textContent;
            createContentPage(contentJson[contentNumber]);
        });
    };
    globalFunc.changeCurrentPage("contentGroup", "contentTable");
    isExport.contentTable = true;
};

const createContentPage = (contentJson) => {
    if(isExport.content){
        // クリア関数を呼んでfalseを代入しelseを削除する
        globalFunc.clearNode(htmlField.content);
        isExport.content = false;
        globalFunc.changeCurrentPage("contentTable", "content");
    };
    const columnsArray = Object.keys(contentJson);
    let contentArray = [];
    for(let i = 0; i < columnsArray.length; i++){
        if(i === 0){
            contentArray.push(globalFunc.getDay(contentJson[columnsArray[i]]));
        }else{
            contentArray.push(contentJson[columnsArray[i]]);
        };
    };
    let contentDay = contentArray[0];
    let contentTitle = contentArray[1];
    let contentDetail = contentArray[2];
    let container = document.createElement('div');
    container.classList.add('d-flex', 'align-items-center', 'justify-content-center');
    container.innerHTML = `
        <div class="card col-10 light-gray mt-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h3 class="card-title">${contentTitle}</h3>
                    <h6>${contentDay}</h6>
                </div>
                <div id="content-detail" class="mx-1>
                    <h4 class="">簡略説明</h4>
                    <p>${contentDetail}</p>
                </div>
            </div>
        </div>
    `;
    htmlField.content.appendChild(container);
    if(contentArray.length >= 4){
        // インデックス4移行が詳細に当たる
        // 3は画像専用
        // 画像のファイル名のデート取得し[,]を区切り文字として配列に格納する
        const contentImagesText = contentArray[3];
        const contentImagesArray = contentImagesText.split(',');
        let contentDetailNode = document.getElementById('content-detail');
        for(let i = 4; i < contentArray.length; i++){
            let j = i - 4;
            contentDetailNode.innerHTML += `
                <div id="add-content" class="d-flex">
                    <div class="col-6">
                        <h6>詳細説明</h5>
                        <p>${contentArray[i]}</p>
                    </div>
                    <div class="col-6">
                        <img class="content-detail-images card-img-top figure-img img-fluid rounded" src="contentImages/${contentImagesArray[j]}"/>
                    </div>
                </div>
            `;
        };
        htmlField.content.appendChild(container);
    };
    globalFunc.changeCurrentPage("contentTable", "content");
    isExport.content = true;
};
