function Main(input) {
    const S = input[0];
    const charList = [];
    for (let char of S) {
        if (charList.indexOf(char) === -1) {
            charList.push(char);
        }
    }
    switch (charList.length) {
        case 1:
            console.log("1");
            return;
        case 2:
            console.log("3");
            return;
        case 3:
            console.log("6");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
