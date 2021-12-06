function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const L = firstLine[0];
  const Q = firstLine[1];

  const woods = [L];

  for (let i = 1; i <= Q; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    let focusWoodIndex = 0;
    let leftLength = 0,
      rightLength = 0;

    for (let distance = 0, i = 0; distance < query[1]; i++) {
      distance += woods[i];
      if (distance >= query[1]) {
        focusWoodIndex = i;
        rightLength = distance - query[1];
        leftLength = woods[i] - rightLength;
        break;
      }
    }

    if (query[0] === 1) {
      // split
      woods.splice(focusWoodIndex, 1, leftLength, rightLength);
    } else {
      // print
      console.log(woods[focusWoodIndex]);
    }
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
