function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const K = firstLine[1];
    const P = input[1].split(" ").map((value) => parseInt(value, 10));
    const sorted = P.splice(0, K).sort((a, b) => a - b);
    for (let i = 0; i <= N - K; i++) {
        console.log(sorted[i]);
        if (i === N - K) {
            break;
        }
        const next = P.shift();
        const insertPos = sorted.findIndex((value) => value > next);
        sorted.splice(insertPos === -1 ? sorted.length : insertPos, 0, next);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
