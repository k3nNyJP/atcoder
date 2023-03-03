function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const groups: number[][] = [];

  for (let i = 1; i <= N; i++) {
    groups.push([i]);
  }

  for (let i = 1; i <= M; i++) {
    const edge = input[i].split(" ").map((value) => parseInt(value, 10));
    const leftGroupIndex = groups.findIndex((group) => group.includes(edge[0]));
    const rightGroupIndex = groups.findIndex((group) =>
      group.includes(edge[1])
    );

    if (leftGroupIndex === rightGroupIndex) {
      continue;
    }

    const leftGroup = groups.splice(leftGroupIndex, 1)[0];
    const rightGroup = groups.splice(
      leftGroupIndex > rightGroupIndex ? rightGroupIndex : rightGroupIndex - 1,
      1
    )[0];

    groups.push([...leftGroup, ...rightGroup]);
  }

  console.log(groups.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
