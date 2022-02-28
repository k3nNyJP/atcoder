function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const M = firstLine[1];
    let pivot;
    for (let i = 1; i <= N; i++) {
        const row = input[i].split(" ").map((value) => parseInt(value, 10));
        if (i === 1) {
            pivot = row[0];
        }
        for (let j = 1; j <= M; j++) {
            const bij = row[j - 1];
            if (bij !== pivot + (i - 1) * 7 + j - 1 || (j !== 1 && bij % 7 === 1)) {
                console.log("No");
                return;
            }
        }
    }
    console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
