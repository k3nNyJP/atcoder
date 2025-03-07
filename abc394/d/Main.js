function Main(input) {
    let S = input[0];
    const brackets = /\(\)|\[\]|<>/g;
    if (S.length % 2 === 1) {
        console.log("No");
        return;
    }
    do {
        const replaced = S.replaceAll(brackets, "");
        if (replaced === S) {
            break;
        }
        S = replaced;
    } while (true);
    // let bracket = brackets.exec(S);
    // while (bracket !== null) {
    //   console.log(bracket, S);
    //   S =
    //     S.substring(0, bracket.index) + S.substring(bracket.index + 2, S.length);
    //   bracket = brackets.exec(S);
    // }
    console.log(S.length > 0 ? "No" : "Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
