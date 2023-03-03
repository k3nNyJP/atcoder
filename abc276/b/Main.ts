function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));

  const adjacents = Array(N)
    .fill(0)
    .map((_): number[] => []);

  for (let i = 1; i <= M; i++) {
    const road = input[i].split(" ").map((value) => parseInt(value, 10));
    adjacents[road[0] - 1].push(road[1]);
    adjacents[road[1] - 1].push(road[0]);
  }

  console.log(
    adjacents
      .map(
        (adjacent) =>
          `${adjacent.length} ${adjacent.sort((a, b) => a - b).join(" ")}`
      )
      .join("\n")
  );
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
