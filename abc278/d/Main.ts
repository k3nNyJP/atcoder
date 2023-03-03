function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));
  const Q = parseInt(input[2], 10);

  let baseNumber = 0;

  const answerList: number[] = [];

  for (let i = 3; i < Q + 3; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    switch (query[0]) {
      case 1:
        for (let j = 0; j < N; j++) {
          A[j] = query[1];
        }
        break;
      case 2:
        A[query[1] - 1] += query[2];
        break;
      case 3:
        answerList.push(A[query[1] - 1]);
        break;
    }
  }

  console.log(answerList.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
