export const htmlField = {
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
}

export const replacing = {
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
};
