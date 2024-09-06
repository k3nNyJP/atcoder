function Main(input) {
    const [N, K] = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    let head = 0, tail = N - 1;
    for (let i = 0; i < K;) {
        let diffHead, diffTail;
        for (let j = 1;; j++) {
            diffHead = A[head + j] - A[head];
            diffTail = A[tail] - A[tail - j];
            if (diffHead > diffTail) {
                head += j;
                i += j;
                break;
            }
            else if (diffTail > diffHead) {
                tail -= j;
                i += j;
                break;
            }
            else if (j === K - i - 1) {
                head += j;
                i += j;
                break;
            }
        }
    }
    console.log(A[tail] - A[head]);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
