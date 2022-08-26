function Main(input: string[]) {
  const [A, B, C] = input[0].split(" ").map((value) => parseInt(value, 10));

  if (C % 2 === 0) {
    console.log(
      Math.abs(A) === Math.abs(B) ? "=" : Math.abs(A) > Math.abs(B) ? ">" : "<"
    );
  } else {
    console.log(A === B ? "=" : A > B ? ">" : "<");
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
