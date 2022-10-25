function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  for (let i = 1; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k <= N; k++) {
        const pointA = input[i].split(" ").map((value) => parseInt(value, 10));
        const pointB = input[j].split(" ").map((value) => parseInt(value, 10));
        const pointC = input[k].split(" ").map((value) => parseInt(value, 10));

        const gradAB = (pointA[0] - pointB[0]) / (pointA[1] - pointB[1]);
        const gradAC = (pointA[0] - pointC[0]) / (pointA[1] - pointC[1]);

        if (gradAB === gradAC || (!isFinite(gradAB) && !isFinite(gradAC))) {
          console.log("Yes");
          return;
        }
      }
    }
  }

  console.log("No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
