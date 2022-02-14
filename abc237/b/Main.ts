function Main(input: string[]) {
  const firstLine = input
    .shift()
    .split(" ")
    .map((value) => parseInt(value, 10));

  const H = firstLine[0];
  const W = firstLine[1];

  const array: string[][] = [];

  for (let i = 0; i < H; i++) {
    const line = input[i].split(" ");
    for (let j = 0; j < W; j++) {
      if (!array[j]) {
        array[j] = [];
      }
      array[j][i] = line[j];
    }
  }

  for (let i of array) {
    console.log(i.join(" "));
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
