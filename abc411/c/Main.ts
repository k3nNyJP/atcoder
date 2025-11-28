function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const cells = new Array(N + 2).fill(false);

  let blackIntervalCount = 0;
  const answer: number[] = [];

  A.forEach((query) => {
    cells[query] = !cells[query];

    const cell = cells[query];
    const prev = cells[query - 1];
    const next = cells[query + 1];

    if (cell) {
      // 白→黒
      if (!prev && !next) {
        blackIntervalCount++;
      } else if (prev && next) {
        blackIntervalCount--;
      }
    } else {
      // 黒→白
      if (!prev && !next) {
        blackIntervalCount--;
      } else if (prev && next) {
        blackIntervalCount++;
      }
    }

    answer.push(blackIntervalCount);
  });

  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
