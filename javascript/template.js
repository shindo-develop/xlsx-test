// 受け取ったシート名を引数にとり、テンプレートを返す
export const createContentTable = (parentNode, contentJson) => {
    const columns = Object.keys(contentJson).length;
    // const rows
    parentNode.innerHTML = ``;
    let container = document.createElement('div');
    container.innerHTML = `
    <table class="table">
        <thead>
            <tr id="table-header">
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
    `
    // let tableHeaders = document.createElement()
    return parentNode.append(container);
};

// 日付

// 主題

// 内容