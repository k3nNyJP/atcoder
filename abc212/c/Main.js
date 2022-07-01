function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const M = firstLine[1];
    const A = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    const B = input[2]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    const X = A[0] > B[0] ? A : B;
    const Y = A[0] > B[0] ? B : A;
    let minDiff = Math.abs(A[0] - B[0]);
    for (let i = 0, j = 0; i < N && j < M; i++) {
        const a = X[i];
        let b = Y[j];
        while (a > b) {
            const diff = Math.abs(a - b);
            console.log(a, b, diff, minDiff);
            minDiff = diff < minDiff ? diff : minDiff;
            b = Y[++j];
        }
    }
    console.log(minDiff);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
