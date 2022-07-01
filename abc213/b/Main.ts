function Main(input: string[]) {
  const A = input[1]
    .split(" ")
    .map((value, index) => ({ index: index + 1, value: parseInt(value, 10) }))
    .sort((a, b) => b.value - a.value);

  console.log(A[1].index);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
