function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const votes = input[1].split(" ").map((value) => parseInt(value, 10));

  // 現在の最大得票数
  let maxVotes = 0;
  // 現在の当選者
  let winner = 1;

  // 開票済みの得票数
  const counted = new Map<number, number>();
  // 当選者リスト
  let result = "";

  // 得票数を計算する桁を候補者番号とズラすためのオフセット
  const offset = 1000000;

  for (let i = 0; i < M; i++) {
    const vote = votes[i];

    const voteCount = (counted.get(vote) ?? 0) + 1;
    counted.set(vote, voteCount);

    if (voteCount * offset + M - vote > maxVotes * offset + M - winner) {
      maxVotes = voteCount;
      winner = vote;
    }

    result += winner + "\n";
  }

  console.log(result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
