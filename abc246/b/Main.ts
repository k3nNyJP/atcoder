function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = firstLine[0];
  const B = firstLine[1];

  const distance = Math.sqrt(A * A + B * B);

  console.log(`${A / distance} ${B / distance}`);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
