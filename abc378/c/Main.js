function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const previouses = [];
    const answers = [];
    for (let i = 0; i < N; i++) {
        const current = A[i];
        answers.push(previouses[current] ?? -1);
        previouses[current] = i + 1;
    }
    console.log(answers.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
