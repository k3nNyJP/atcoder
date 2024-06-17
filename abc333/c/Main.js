function Main(input) {
    const N = parseInt(input[0], 10);
    let index = 1;
    for (let l = 1;; l++) {
        for (let m = 1; m <= l; m++) {
            for (let r = 1; r <= m; r++, index++) {
                if (index === N) {
                    console.log(Number("1".repeat(l)) +
                        Number("1".repeat(m)) +
                        Number("1".repeat(r)));
                    return;
                }
            }
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
