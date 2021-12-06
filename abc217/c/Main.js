function Main(input) {
    const N = parseInt(input[0], 10);
    const P = input[1].split(" ").map((value) => parseInt(value, 10));
    const Q = [];
    P.forEach((value, index) => {
        Q[value] = index + 1;
    });
    console.log(Q.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
