function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  console.log(A.filter((value, index) => A.indexOf(value) === index).length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
