function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const M = firstLine[1];

  const A = input[1].split(" ").map((value) => parseInt(value, 10));
  const C = input[2].split(" ").map((value) => parseInt(value, 10));

  const B = [];

  for (let i = 0; i <= M; i++) {
    let c = C[i];

    for (let j = 0; j <= i; j++) {
      const b = B[j];
      const a = A[i - j];

      if (a === undefined) {
        continue;
      }
      if (b !== undefined) {
        c -= a * b;
      } else {
        B[i] = c / a;
      }
    }
  }

  console.log(B.join(" "));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
