function Main(input: string[]) {
  const cubeA = input[0].split(" ").map((value) => parseInt(value, 10));
  const cubeB = input[1].split(" ").map((value) => parseInt(value, 10));

  const isOverwraped =
    cubeA[3] > cubeB[0] &&
    cubeA[4] > cubeB[1] &&
    cubeA[5] > cubeB[2] &&
    cubeA[0] < cubeB[3] &&
    cubeA[1] < cubeB[4] &&
    cubeA[2] < cubeB[5];

  console.log(isOverwraped ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
