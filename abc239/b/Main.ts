function Main(input: string[]) {
  const X = parseInt(input[0], 10);
  if (Number.isSafeInteger(X)) {
    console.log(Math.floor(X / 10));
    return;
  }

  const bigX = BigInt(input[0]);
  const divided = bigX / BigInt(10);
  const remainder = bigX % BigInt(10);
  console.log(
    divided < 0 && remainder !== BigInt(0)
      ? (divided - BigInt(1)).toString()
      : divided.toString()
  );
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
