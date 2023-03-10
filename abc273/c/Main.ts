function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1]
    .split(" ")
    .map((value) => parseInt(value, 10))
    .sort((a, b) => b - a);
  const answerList = Array(N).fill(0);

  for (let k = 0, i = 0; i < N; i++) {
    if (i > 0 && A[i] !== A[i - 1]) {
      k++;
    }

    answerList[k]++;
  }

  console.log(answerList.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
