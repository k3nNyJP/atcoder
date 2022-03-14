function Main(input: string[]) {
  const A = input[0].split(" ").map((value) => parseInt(value, 10));
  let index = 0;

  for (let i = 0; i < 2; i++) {
    index = A[index];
  }

  console.log(A[index]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
