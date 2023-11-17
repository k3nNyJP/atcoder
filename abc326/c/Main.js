function Main(input) {
    const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    let ans = 0;
    for (let head = 0, tail = 0; head < N && tail < N; head++) {
        while (A[tail + 1] - A[head] < M) {
            tail++;
            if (tail >= N) {
                break;
            }
        }
        ans = tail + 1 - head > ans ? tail + 1 - head : ans;
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
