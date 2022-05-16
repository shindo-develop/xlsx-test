export const htmlField = {
    info: document.getElementById('info'),
    contentGroup: document.getElementById('content-group'),
    contentTable: document.getElementById('content-table'),
    content: document.getElementById('content'),
};

export const button = {
    selectedFile: document.getElementById('selected-file'),
    input: document.getElementById('input'),
    back: document.getElementById('back-button'),
};

export const boxes = {
    inputBox: document.getElementById('input-box'),
    downloadBox: document.getElementById('download-box'),
    searchBox: document.getElementById('search-box'),
}

export const isExport = {
    importantInfo: false,
    contentTable: false,
    content: false,
}

export const tableParts = {
    tableHeaders: document.getElementById('table-headers'),
    tableBody: document.getElementById('table-body'),
};

export const currentPages = {
    importantInfo: false,
    contentGroup: true,
    contentTable: false,
    content: false,
};

export const globalFunc = {
    displayNone: (targetNode) => {
        targetNode.classList.add('d-none');
        targetNode.classList.remove('d-block');
    },
    displayBlock: (targetNode) => {
        targetNode.classList.add('d-block');
        targetNode.classList.remove('d-none');
    },
    appealStart: (targetNode) => {
        targetNode.classList.add('appeal');
    },
    appealEnd: (targetNode) => {
        targetNode.classList.remove('appeal');
    },
    getDay: (timeNumber) => {
        const ADJUSTMENTS_NUMBER = 25750;
        const pointDay = new Date('july 1, 1970');
        const pointAfterDay = Number(timeNumber) - ADJUSTMENTS_NUMBER;
        const detailDay = new Date(pointDay.setDate(pointDay.getDate() + pointAfterDay));
        const detailDayYear = String(detailDay).substring(11, 15);
        const detailDayMonth = globalFunc.getMonthNumber(String(detailDay).substring(4, 7));
        const detailDayDay = String(detailDay).substring(8, 10);
        return `${detailDayYear}/${detailDayMonth}/${detailDayDay}`;
    },
    changeCurrentPage: (oldPage, newPage) => {
        currentPages[oldPage] = false;
        currentPages[newPage] = true;
    },
    getMonthNumber: (monthString) => {
        switch(monthString){
            case "Jan":
                return "01";
                break;
            case "Feb":
                return "02";
                break;
            case "Mar":
                return "03";
                break;
            case "Apr":
                return "04";
                break;
            case "May":
                return "05";
                break;
            case "Jun":
                return "06";
                break;
            case "Jul":
                return "07";
                break;
            case "Aug":
                return "08";
                break;
            case "Sep":
                return "09";
                break;
            case "Oct":
                return "10";
                break;
            case "Nov":
                return "11";
                break;
            case "Dec":
                return "12";
                break;
        };
    },
    returnPage: () => {
        button.back.addEventListener('click', () => {
            const pageArray = Object.keys(currentPages);
            let finishFlag = true;
            let i = 0;
            let currentPage;
            while(finishFlag){
                if(currentPages[pageArray[i]]){
                    currentPage = pageArray[i];
                    finishFlag = false;
                };
                i++;
            };
            switch (currentPage){
                case "importantInfo":
                    globalFunc.displayNone(htmlField.importantInfo);
                    globalFunc.displayBlock(htmlField.contentGroup);
                    globalFunc.changeCurrentPage("importantInfo", "contentGroup");
                    break;
                case "contentTable":
                    globalFunc.displayNone(htmlField.contentTable);
                    globalFunc.displayBlock(htmlField.contentGroup);
                    globalFunc.changeCurrentPage("contentTable", "contentGroup");
                    break;
                case "content":
                    globalFunc.displayNone(htmlField.content);
                    globalFunc.displayBlock(htmlField.contentTable);
                    globalFunc.changeCurrentPage("content", "contentTable");
                    break;
                default:
                    swal('トップページです');
            };
        });
    },
    clearNode: (targetNode) => {
        targetNode.innerHTML = "";
    },
};
