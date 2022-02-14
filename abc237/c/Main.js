function Main(input) {
    const S = input[0];
    const revS = S.split("").reverse().join("");
    let aCount = 0;
    for (let i = 0; revS[i] === "a"; i++) {
        if (S[i] !== "a") {
            aCount++;
        }
    }
    const paddedS = Array(aCount).fill("a").concat(S.split("")).join("");
    console.log(paddedS === revS ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
