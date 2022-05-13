import Content from './content.js';
import {createContentTable} from './template.js';

document.getElementById('appleID').addEventListener('click', (value) => {
    // htmlのidはvalue.path[0].idに相当する
    let appleID = new Content(value.path[0].id);
    let appleIDJson = Content.contentJson[appleID.contentName];
    appleID.hideDisplay();
    appleID.appearDisplay();
    createContentTable(appleIDJson);
});