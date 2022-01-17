function Main(input) {
    const K = BigInt(input[0]);
    console.log(K.toString(2).replace(/1/g, "2"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
