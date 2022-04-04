function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const S = input[1];

  console.log(S[N - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
