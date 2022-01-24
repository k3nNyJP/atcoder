function Main(input) {
    const N = parseInt(input[0]);
    const heightList = input[1].split(" ").map((value) => parseInt(value, 10));
    for (let i = 0; i < N; i++) {
        if (i === N - 1 || heightList[i] >= heightList[i + 1]) {
            console.log(heightList[i]);
            return;
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
