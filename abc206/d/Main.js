function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const head = A.slice(0, Math.ceil(N / 2));
    const tail = A.slice(Math.floor(N / 2)).reverse();
    console.log(head, tail);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
