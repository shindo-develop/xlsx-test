import { excelJson } from './excel.js';
import { createContentTable } from './template.js';

const config = {
    contentGroup: document.getElementById('content-group'),
    contentTable: document.getElementById('content-table'),
    content: document.getElementById('content'),
    appleID: document.getElementById('appleID'),
    google: document.getElementById('google'),
}

// 非表示にする
const displayNone = (targetNode) => {
    targetNode.classList.add('d-none');
    targetNode.classList.remove('d-block');
};

// 表示する
const displayBlock = (targetNode) => {
    targetNode.classList.add('d-block');
    targetNode.classList.remove('d-none');
};

config.appleID.addEventListener('click', (value) => {
    // htmlのidはvalue.path[0].idに相当する
    let appleIDJson = excelJson[value.path[0].id];
    displayNone(config.contentGroup);
    displayBlock(config.contentTable);
    createContentTable(config.contentTable, appleIDJson);
});