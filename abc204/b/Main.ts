function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const ans = input[1]
    .split(" ")
    .reduce((total, value) => total + Math.max(0, parseInt(value, 10) - 10), 0);

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
