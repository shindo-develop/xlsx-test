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

export const replacing = {
    displayNone: (targetNode) => {
        targetNode.classList.add('d-none');
        targetNode.classList.remove('d-block');
    },
    displayBlock: (targetNode) => {
        targetNode.classList.add('d-block');
        targetNode.classList.remove('d-none');
    },
};
