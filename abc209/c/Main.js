function Main(input) {
    const N = parseInt(input[0], 10);
    const C = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => a - b);
    let result = BigInt(1);
    for (let i = 0; i < N; i++) {
        const ci = C[i];
        // パターンなし
        if (ci < i + 1) {
            console.log(0);
            return;
        }
        result = result * BigInt(ci - i);
        result %= BigInt(1000000007);
    }
    console.log(result.toString());
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
