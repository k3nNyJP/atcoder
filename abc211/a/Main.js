function Main(input) {
    const [A, B] = input[0].split(" ").map((value) => parseInt(value, 10));
    console.log((A - B) / 3 + B);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
