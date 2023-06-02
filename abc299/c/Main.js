function Main(input) {
    const N = parseInt(input[0], 10);
    const S = input[1];
    let maxDangoLevel = -1;
    let dangoLevel = 0;
    for (let i = 0, foundBar = false; i < N; i++) {
        if (S[i] === "o") {
            dangoLevel++;
            if (!foundBar) {
                continue;
            }
            maxDangoLevel = Math.max(maxDangoLevel, dangoLevel);
        }
        else {
            if (!foundBar && dangoLevel > 0) {
                maxDangoLevel = Math.max(maxDangoLevel, dangoLevel);
            }
            dangoLevel = 0;
            foundBar = true;
        }
    }
    console.log(maxDangoLevel);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
