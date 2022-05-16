function Main(input: string[]) {
  const xList: string[] = [];
  const yList: string[] = [];

  for (let i = 0; i < 3; i++) {
    const point = input[i].split(" ");

    const xIndex = xList.indexOf(point[0]);
    const yIndex = yList.indexOf(point[1]);

    if (xIndex === -1) {
      xList.push(point[0]);
    } else {
      xList.splice(xIndex, 1);
    }

    if (yIndex === -1) {
      yList.push(point[1]);
    } else {
      yList.splice(yIndex, 1);
    }
  }

  console.log(xList[0], yList[0]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
