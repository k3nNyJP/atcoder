function Main(input) {
    const S = input[0];
    console.log(("0" + S).slice(0, 4));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
