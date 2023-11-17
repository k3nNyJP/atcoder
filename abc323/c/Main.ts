function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const scores: { total: number; remains: number[] }[] = [];
  let highestScore = -1;

  for (let player = 1; player <= N; player++) {
    const resolves = input[1 + player];
    const result = { total: 0, remains: [] as number[] };
    for (let question = 0; question < resolves.length; question++) {
      switch (resolves[question]) {
        case "o":
          result.total += A[question];
          break;
        case "x":
          result.remains.push(A[question]);
          break;
      }
    }

    result.total += player;
    result.remains.sort((a, b) => b - a);

    scores.push(result);
    if (result.total > highestScore) {
      highestScore = result.total;
    }
  }

  const ans: number[] = [];
  for (let player = 0; player < N; player++) {
    let needAC = 0;
    const score = scores[player];

    let behindScore = highestScore - score.total;

    for (let i = 0; behindScore > 0; i++) {
      needAC++;
      behindScore -= score.remains[i];
    }

    ans.push(needAC);
  }

  console.log(ans.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
