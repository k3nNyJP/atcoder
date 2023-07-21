function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    const minA = A[0];
    for (let i = 0, count = 0, target = A[0]; i < N; i++) {
        if (A[i] === target) {
            count++;
            if (count > N / 2 + (target === minA ? 1 : 0)) {
                console.log("No");
                return;
            }
        }
        else {
            count = 1;
            target = A[i];
        }
    }
    console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
