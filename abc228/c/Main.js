function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const K = firstLine[1];
    const scoreList = [];
    for (let i = 1; i <= N; i++) {
        scoreList[i] = input[i]
            .split(" ")
            .reduce((sum, score) => (sum += parseInt(score, 10)), 0);
    }
    const sortedScoreList = scoreList.slice().sort((a, b) => b - a);
    const borderLine = sortedScoreList[K - 1];
    for (let i = 1; i <= N; i++) {
        console.log(scoreList[i] + 300 >= borderLine ? "Yes" : "No");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
