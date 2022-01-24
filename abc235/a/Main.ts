function Main(input: string[]) {
  let number = parseInt(input[0]);

  let result = number;

  for (let i = 0; i < 2; i++) {
    const rorationDigit = number % 10;
    number = Math.floor(number / 10) + 100 * rorationDigit;
    result += number;
  }

  console.log(result);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
