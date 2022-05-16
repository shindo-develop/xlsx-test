import { excelJson } from './excel.js';
import { htmlField, globalFunc } from './config.js';
import { createContentTable} from './template.js';

swal('【重要】FAQエクセルファイルを読み込んでから使用してください。\n①赤い帯のナビゲーションタグのダウンロードボタンからエクセルファイルを読み込む\n②ダウンロードボタンの横にあるインプットボタンを押す')

globalFunc.returnPage();

// card
for(let i = 0; i < document.querySelectorAll('.contents-move').length; i++){
    document.querySelectorAll('.contents-move')[i].addEventListener('click', (event) => {
        const contentJson = excelJson[event.composedPath()[0].id];
        globalFunc.displayNone(htmlField.contentGroup);
        globalFunc.displayBlock(htmlField.contentTable);
        createContentTable(contentJson);
    });
};
