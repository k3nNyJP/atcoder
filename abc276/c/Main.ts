function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const P = input[1].split(" ").map((value) => parseInt(value, 10));

  let pivotIndex = -1,
    pivotValue = -1;
  for (let i = N - 1; i > 0; i--) {
    if (P[i] < P[i - 1]) {
      pivotIndex = i - 1;
      pivotValue = P[i - 1];
      break;
    }
  }

  const replaceTarget = P.splice(pivotIndex).sort((a, b) => b - a);
  const pivotValueNewIndex = replaceTarget.indexOf(pivotValue);
  const newPivotValue = replaceTarget.splice(pivotValueNewIndex + 1, 1);

  console.log([...P, newPivotValue, ...replaceTarget].join(" "));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
