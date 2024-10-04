function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1]
    .split(" ")
    .map((value) => parseInt(value, 10))
    .sort((a, b) => a - b);

  const totalA = A.reduce((sum, value) => sum + value);

  if (totalA <= M) {
    console.log("infinite");
    return;
  }

  let allowance = Math.floor(M / N);

  while (true) {
    let surplus = 0;
    for (let i = 0; A[i] < allowance; i++) {
      surplus += allowance - A[i];
    }

    const payment = allowance * N - surplus;

    if (payment > M || M - payment > N) {
      // まだ不足 or 余りすぎ
      allowance -= Math.floor((payment - M) / N);
    } else {
      // 適正
      console.log(allowance);
      return;
    }
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
