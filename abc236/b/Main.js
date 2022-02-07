function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const exists = [];
    for (let i = 0; i < 4 * N - 1; i++) {
        exists[A[i]] = (exists[A[i]] || 0) + 1;
    }
    console.log(exists.findIndex((value) => value === 3));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
