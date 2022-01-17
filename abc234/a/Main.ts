function f(x: number) {
  return (x * x) + (2 * x) + 3;
}

function Main(input: string[]) {
  const t = parseInt(input[0], 10);

  console.log(f(f(f(t) + t) + f(f(t))));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
