function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const nextIndex = [];
    A.forEach((prev, index) => (nextIndex[prev] = index + 1));
    const answer = [];
    for (let i = 0, current = -1; i < N; i++) {
        answer.push(nextIndex[current]);
        current = nextIndex[current];
    }
    console.log(answer.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
