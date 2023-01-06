function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const originals: { [poem: string]: number } = {};
  const bestPoem = { index: -1, score: -1 };

  for (let i = 1; i <= N; i++) {
    const post = input[i].split(" ");
    const poem = post[0];
    const score = parseInt(post[1], 10);

    if (originals[poem]) {
      continue;
    }

    originals[poem] = score;
    if (score > bestPoem.score) {
      bestPoem.index = i;
      bestPoem.score = score;
    }
  }

  console.log(bestPoem.index);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
