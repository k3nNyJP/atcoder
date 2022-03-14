function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const M = firstLine[1];
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const B = input[2].split(" ").map((value) => parseInt(value, 10));
    const pastaList = [];
    for (let i = 0; i < N; i++) {
        pastaList[A[i]] = (pastaList[A[i]] || 0) + 1;
    }
    for (let i = 0; i < M; i++) {
        if (!pastaList[B[i]]) {
            console.log("No");
            return;
        }
        pastaList[B[i]] = pastaList[B[i]] - 1;
    }
    console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
