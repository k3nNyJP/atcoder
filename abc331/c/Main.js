function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    // 数字が出てきた回数
    const counts = [];
    for (let i = 0; i < N; i++) {
        counts[A[i]] = (counts[A[i]] ?? 0) + 1;
    }
    // 1回出てきた答えをメモしておくところ
    const memo = [];
    for (let i = counts.length, sum = 0; i > 0; i--) {
        sum += i * (counts[i] ?? 0);
        memo[i] = sum;
    }
    const answers = [];
    for (let i = 0; i < N; i++) {
        answers.push(memo[A[i] + 1] ?? 0);
    }
    console.log(answers.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
