function Main(input: string[]) {
  const password = input[0].split("").map((value) => parseInt(value, 10));

  if (
    password.filter((digit, index) => password.indexOf(digit) === index)
      .length === 1
  ) {
    console.log("Weak");
    return;
  }

  for (let i = 0; i < 3; i++) {
    const digit = password[i];
    const next = password[i + 1] === 0 ? 10 : password[i + 1];

    if (digit !== next - 1) {
      console.log("Strong");
      return;
    }
  }

  console.log("Weak");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
