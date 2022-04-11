function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const K = firstLine[1];

  const A = input[1].split(" ").map((value) => parseInt(value, 10));
  const B = input[2].split(" ").map((value) => parseInt(value, 10));

  let possibleNodes = [A[0], B[0]];

  for (let i = 1; i < N; i++) {
    const a = A[i];
    const b = B[i];

    const nextNodes = [];

    if (possibleNodes.some((value) => Math.abs(value - a) <= K)) {
      nextNodes.push(a);
    }
    if (possibleNodes.some((value) => Math.abs(value - b) <= K)) {
      nextNodes.push(b);
    }

    if (nextNodes.length <= 0) {
      console.log("No");
      return;
    }

    possibleNodes = nextNodes;
  }

  console.log("Yes");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
