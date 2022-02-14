function Main(input: string[]) {
  const N = BigInt(input[0]);

  const absN = N > 0 ? N : -N - BigInt(1);

  console.log(absN.toString(2).length < 32 ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
