function Main(input) {
    const S = input[0].split("").map((value) => parseInt(value, 10));
    let needLoop = 0;
    for (let i = 0; i < S.length - 1; i++) {
        if (S[i] < S[i + 1]) {
            needLoop++;
        }
    }
    console.log(needLoop * 10 + S.length + S[0]);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
