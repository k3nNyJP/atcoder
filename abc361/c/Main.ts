function Main(input: string[]) {
  const [N, K] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1]
    .split(" ")
    .map((value) => parseInt(value, 10))
    .sort((a, b) => a - b);

  let head = 0,
    tail = N - 1;

  for (let i = 0; i < K; ) {
    const diffHead = A[head + 1] - A[head];
    const diffTail = A[tail] - A[tail - 1];
  }

  console.log(A[tail] - A[head]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
