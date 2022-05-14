import { excelJson } from './excel.js';
import { content, htmlField, replacing } from './config.js';
import { createContentTableBody, createContentTableHeaders} from './template.js';

swal('【重要】FAQエクセルファイルを読み込んでから使用してください。\n①赤い帯のナビゲーションタグのダウンロードボタンからエクセルファイルを読み込む\n②ダウンロードボタンの横にあるインプットボタンを押す')

content.appleID.addEventListener('click', (event) => {
    // htmlのidはvalue.path[0].idに相当する
    // value.path[0].idは2023年にアクセス不可のapiになるため
    // event.composedPath()[0].idを使用
    // console.log(value.path[0].id);
    let appleIDJson = excelJson[event.composedPath()[0].id];
    replacing.displayNone(htmlField.contentGroup);
    replacing.displayBlock(htmlField.contentTable);
    createContentTableHeaders(appleIDJson);
    createContentTableBody(appleIDJson);
});
