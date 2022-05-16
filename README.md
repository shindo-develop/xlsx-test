letで代入用の変数を宣言した際に空文字を入れると文字列型の変数として解釈されてしまうので、無駄に定義しないこと
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
