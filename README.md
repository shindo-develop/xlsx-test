# 今回学んだこと
- XLSXの簡単な使い方(cdn, node.jsは使用していない)
    ```js
    <!-- excel file を選択して -->
    let selectedFile;
    button.selectedFile.addEventListener('change', (event) =>{
        selectedFile = event.target.files[0];
    });

    <!-- excel fileをバイナリデータに変換し、XLSXに渡し、file dataをobject化する -->
    button.input.addEventListener("click", () => {
        if (selectedFile) {
            let fileReader = new FileReader();
            fileReader.readAsBinaryString(selectedFile);
            fileReader.onload = (event) => {
                let data = event.target.result;
                let workbook = XLSX.read(data, { type: "binary" });
                for (let i = 0; i < workbook.SheetNames.length; i++) {
                    let sheetName = workbook.SheetNames[i];
                    let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    excelJson[sheetName] = rowObject;
                };
            };
        };
    });
    ```
- select box で選択した選択肢が変化したを察知してくれるプロパティ => "DOMContentLoaded"
    ```js
    element.addEventListener("DOMContentLoaded", callbackFunc);
    ```
- 代入用の変数を宣言した際に際に空文字を入れないこと、入れてしまうと文字列型として解釈されてしまい任意の値を代入できなくなる
    ```js
    let currentPage;
    while(finishFlag){
        if(currentPages[pageArray[i]]){
            currentPage = pageArray[i];
            finishFlag = true;
        };
        i++;
    };
    ```
- chromeの仕様でhttp,httpsプロトコルでなければローカルのファイルにアクセスできない、とはいえ、webサーバを立てられる環境下でなかったため、以下のオプションを付けることでchromeでもfileプロトコル使用時にローカルのファイルを読み込めるようにできる
    ```
    忘れたのでオプションが分かり次第載せます
    ```
- cssのkeyframeを簡単に理解した
    ```css
    select{
        <!-- 作成したkeyframe -->
        animation-name: 任意の名前;
        <!-- 変化にかける時間 -->
        animation-duration: 1s;
        <!-- 変化を行う回数を指定 -->
        animation-iteration-count: infinite;
    }

    @keyframe 任意の名前{
        to{
            最初の状態
        }
        from{
            最後の状態
        }
    }
    ```
- 共通の関数や定数の定義をconfig.jsにまとめる
    ```
    config.jsを参照してください
    ```
