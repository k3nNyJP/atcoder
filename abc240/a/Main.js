function Main(input) {
    const points = input[0].split(" ").map((value) => parseInt(value, 10));
    const diff = Math.abs(points[0] - points[1]);
    console.log(diff === 1 || diff === 9 ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
