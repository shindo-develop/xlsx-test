// 受け取ったシート名を引数にとり、テンプレートを返す
export const createContentTable = (parentNode, contentJson) => {
    parentNode.innerHTML = ``;
    let container = document.createElement('div');
    container.innerHTML = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>${contentJson}</td>
            </tr>
        </tbody>
    </table>
    `
    return parentNode.append(container);
};

// 日付

// 主題

// 内容