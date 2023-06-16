function Main(input: string[]) {
  const [N, D] = input[0].split(" ").map((value) => parseInt(value, 10));

  const parsedPositionList = [
    ,
    input[1].split(" ").map((value) => parseInt(value, 10)),
  ];
  const pandemicGraph = [[1]];

  for (let i = 2; i <= N; i++) {
    const parsonI = input[i].split(" ").map((value) => parseInt(value, 10));
    parsedPositionList[i] = parsonI;

    const infectedGroupIndexList: number[] = [];

    for (
      let pandemicGroupIndex = 0;
      pandemicGroupIndex < pandemicGraph.length;
      pandemicGroupIndex++
    ) {
      const pandemicGroup = pandemicGraph[pandemicGroupIndex];
      let infected = false;

      for (let j = 0; j < pandemicGroup.length && !infected; j++) {
        const parsonJ = parsedPositionList[pandemicGroup[j]]!;
        const distance = Math.sqrt(
          (parsonI[0] - parsonJ[0]) ** 2 + (parsonI[1] - parsonJ[1]) ** 2
        );
        if (distance <= D) {
          infected = true;
        }
      }

      if (infected) {
        infectedGroupIndexList.push(pandemicGroupIndex);
      }
    }

    while (infectedGroupIndexList.length > 1) {
      const lastGroupIndex = infectedGroupIndexList.pop()!;
      const concatTargetIndex =
        infectedGroupIndexList[infectedGroupIndexList.length - 1];

      const lastGroup = pandemicGraph.splice(lastGroupIndex, 1)[0];
      pandemicGraph[concatTargetIndex] = [
        ...pandemicGraph[concatTargetIndex],
        ...lastGroup,
      ];
    }

    if (infectedGroupIndexList.length) {
      pandemicGraph[infectedGroupIndexList[0]] = [
        ...pandemicGraph[infectedGroupIndexList[0]],
        i,
      ];
    } else {
      pandemicGraph.push([i]);
    }
  }

  const answer: string[] = [];
  for (let i = 1; i <= N; i++) {
    answer.push(pandemicGraph[0].includes(i) ? "Yes" : "No");
  }

  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
