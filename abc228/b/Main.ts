function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const X = firstLine[1];

  const friendsGraph = input[1].split(" ").map((value) => parseInt(value, 10));
  const result = friendsGraph.map((_) => false);

  let target = X - 1;

  while (!result[target]) {
    result[target] = true;
    target = friendsGraph[target] - 1;
  }

  console.log(result.reduce((sum, friend) => (sum += friend ? 1 : 0), 0));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
