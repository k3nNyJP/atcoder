function Main(input: string[]) {
  const X = parseInt(input[0], 10);
  console.log(!!X && X % 100 === 0 ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
