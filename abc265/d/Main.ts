function Main(input: string[]) {
  const [N, P, Q, R] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const possibilities = {
    P: [] as number[],
    Q: [] as number[],
    R: [] as number[],
  };
  const maxPQR = Math.max(P, Q, R);

  for (let i = 0; i < N; i++) {
    for (let j = i, total = 0; j < N; j++) {
      total += A[j];

      if (total === P) {
        possibilities.P[i] = j + 1;
      }
      if (total === Q) {
        possibilities.Q[i] = j + 1;
      }
      if (total === R) {
        possibilities.R[i] = j + 1;
      }

      if (total >= maxPQR) {
        break;
      }
    }
  }

  possibilities.P.forEach((value, index) => {
    const possibilityQ = possibilities.Q[value];

    if (possibilityQ) {
      const possibilityR = possibilities.R[possibilityQ];

      if (possibilityR) {
        console.log("Yes");
        process.exit(0);
      }
    }
  });

  console.log("No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
