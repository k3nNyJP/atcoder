function Main(input: string[]) {
  // write some code
  const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
  const S = " " + input[1];

  const conjunctions: number[] = [0];
  const answer: number[] = [];

  for (let i = 1; i < S.length - 1; i++) {
    conjunctions[i] =
      S[i] === S[i + 1] ? conjunctions[i - 1] + 1 : conjunctions[i - 1];
  }

  for (let i = 2; i < Q + 2; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    answer.push(conjunctions[query[1] - 1] - conjunctions[query[0] - 1]);
  }

  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
