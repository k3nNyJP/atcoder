function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const W = firstLine[1];

  const cheeseList = input
    .slice(1, N + 1)
    .map((cheese) => cheese.split(" ").map((value) => parseInt(value, 10)))
    .sort((a, b) => b[0] - a[0]);

  let result = BigInt(0);

  for (let weight = 0, i = 0; weight < W && i < cheeseList.length; i++) {
    const nextCheese = cheeseList[i];
    const pickWeight = Math.min(nextCheese[1], W - weight);

    result += BigInt(nextCheese[0] * pickWeight);
    weight += pickWeight;
  }

  console.log(result.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
