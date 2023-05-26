function Main(input) {
    const S = input[0];
    const T = input[1];
    const atcoder = "atcoder";
    const SWithoutAtcoder = S.replace(/[atcoder@]/g, "")
        .split("")
        .sort()
        .join("");
    const TWithoutAtcoder = T.replace(/[atcoder@]/g, "")
        .split("")
        .sort()
        .join("");
    if (SWithoutAtcoder !== TWithoutAtcoder) {
        console.log("No");
        return;
    }
    const SAt = S.replace(/[^@]/g, "");
    const TAt = T.replace(/[^@]/g, "");
    const SAtcoder = S.replace(/[^atcoder]/g, "");
    const TAtcoder = T.replace(/[^atcoder]/g, "");
    console.log(S, T);
    console.log(SWithoutAtcoder, TWithoutAtcoder);
    console.log(SAt, TAt);
    console.log(SAtcoder, TAtcoder);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
