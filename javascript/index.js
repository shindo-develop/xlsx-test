import { excelJson } from './excel.js';
import { htmlField, globalFunc, isExport, boxes } from './config.js';
import { createContentTable} from './template.js';

swal('【重要】FAQエクセルファイルを読み込んでから使用してください。\n①赤い帯のナビゲーションタグのダウンロードボタンからエクセルファイルを読み込む\n②ダウンロードボタンの横にあるインプットボタンを押す');

globalFunc.returnPage();

// card
for(let i = 0; i < document.querySelectorAll('.contents-move').length; i++){
    document.querySelectorAll('.contents-move')[i].addEventListener('click', (event) => {
        const contentName = event.composedPath()[0].id;
        const contentJson = excelJson[contentName];
        globalFunc.displayNone(htmlField.contentGroup);
        globalFunc.displayBlock(htmlField.contentTable);
        createContentTable(contentName, contentJson);
    });
};

// option
document.addEventListener("DOMContentLoaded", () =>{
    boxes.selectedContent.addEventListener('change', () => {
        const contentName = boxes.selectedContent.value;
        const contentJson = excelJson[contentName];
        globalFunc.displayNone(htmlField.contentGroup);
        globalFunc.displayBlock(htmlField.contentTable);
        if(isExport.content)globalFunc.displayNone(htmlField.content);
        createContentTable(contentName, contentJson);
    });
});
