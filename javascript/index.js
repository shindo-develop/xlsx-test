import { excelJson } from './excel.js';
import { content, htmlField, replacing } from './config.js';
import { createContentTableBody, createContentTableHeaders} from './template.js';

content.appleID.addEventListener('click', (event) => {
    // htmlのidはvalue.path[0].idに相当する
    // value.path[0].idは2023年にアクセス不可のapiが使えなくなるため
    // event.composedPath()[0].idを使用
    // console.log(value.path[0].id);
    let appleIDJson = excelJson[event.composedPath()[0].id];
    replacing.displayNone(htmlField.contentGroup);
    replacing.displayBlock(htmlField.contentTable);
    createContentTableHeaders(appleIDJson);
    createContentTableBody(appleIDJson);
});