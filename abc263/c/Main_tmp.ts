function searchAscend(N: number, M: number, determined: number[]) {
  if (determined.length === N) {
    console.log(determined.join(" "));
    return;
  }

  if (determined.length === N - 1) {
    for (let i = determined[determined.length - 1] + 1; i <= M; i++) {
      console.log(`${determined.join(" ")} ${i}`);
    }
    return;
  }

  for (let i = determined[determined.length - 1] + 1; i <= M; i++) {
    searchAscend(N, M, [...determined, i]);
  }
}

function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));

  for (let i = 1; i <= M - N + 1; i++) {
    searchAscend(N, M, [i]);
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
