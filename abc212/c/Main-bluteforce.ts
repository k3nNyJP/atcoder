function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));

  const N = firstLine[0];
  const M = firstLine[1];

  const A = input[1].split(" ").map((value) => parseInt(value, 10));
  const B = input[2].split(" ").map((value) => parseInt(value, 10));

  let minDiff = Math.abs(A[0] - B[0]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const a = A[i];
      const b = B[j];

      const diff = Math.abs(a - b);

      minDiff = diff < minDiff ? diff : minDiff;
    }
  }

  console.log(minDiff);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
