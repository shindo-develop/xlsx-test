export const htmlField = {
    info: document.getElementById('info'),
    contentGroup: document.getElementById('content-group'),
    contentTable: document.getElementById('content-table'),
    content: document.getElementById('content'),
};

export const input = {
    form: document.getElementById('input'),
    button: document.getElementById('input-button')
};

export const tableParts = {
    tableHeaders: document.getElementById('table-headers'),
    tableBody: document.getElementById('table-body'),
};

export const content = {
    appleID: document.getElementById('appleID'),
    google: document.getElementById('google'),
};

export const currentPage = {
    contentGroupPage: true,
    contentTablePage: false,
    contentPage: false,
    infoContentPage: false,
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
    // 現在のページを真偽値で制御する関数https://cpoint-lab.co.jp/article/201908/11323/
    changeCurrentPage: () => {
        let currentPage;
        nextPage = true;
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
};
