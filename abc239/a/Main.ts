function Main(input: string[]) {
  const H = parseInt(input[0], 10);

  console.log(Math.sqrt(H * (12800000 + H)));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
