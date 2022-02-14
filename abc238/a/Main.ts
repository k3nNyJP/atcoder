function Main(input: string[]) {
  const n = parseInt(input[0], 10);

  console.log(n > 10 || Math.pow(2, n) > Math.pow(n, 2) ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
