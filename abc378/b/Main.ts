function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const schedules = input
    .slice(1, N + 1)
    .map((str) => str.split(" ").map((value) => parseInt(value, 10)));
  const Q = parseInt(input[N + 1]);
  const queries = input.slice(N + 2, Q + N + 2);

  for (let i = 0; i < Q; i++) {
    const query = queries[i].split(" ").map((value) => parseInt(value, 10));
    const targetGarbage = schedules[query[0] - 1];

    // そのゴミが回収されるのは何周期目か
    const weeks = Math.floor(query[1] / targetGarbage[0]);
    // その周期の何日目に回収されるのか
    const remain = query[1] % targetGarbage[0];

    console.log(
      targetGarbage[0] * weeks +
        targetGarbage[1] +
        (remain > targetGarbage[1] ? targetGarbage[0] : 0)
    );
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
