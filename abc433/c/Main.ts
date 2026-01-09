function Main(input: string[]) {
  const S = input[0] + "z";

  let firstNumber = -999;
  let firstCount = 0;
  let secondNumber = Number(S[0]);
  let secondCount = 1;

  let answer = 0;

  for (let i = 1; i < S.length; i++) {
    const current = Number(S[i]);

    if (current === secondNumber) {
      secondCount++;
      continue;
    }

    if (secondNumber - firstNumber === 1) {
      answer += Math.min(firstCount, secondCount);
    }

    firstNumber = secondNumber;
    firstCount = secondCount;

    secondNumber = current;
    secondCount = 1;
  }

  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
