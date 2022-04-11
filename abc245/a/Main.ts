function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));

  const A = firstLine[0];
  const B = firstLine[1];
  const C = firstLine[2];
  const D = firstLine[3];

  if (A > C) {
    console.log("Aoki");
    return;
  } else if (A < C) {
    console.log("Takahashi");
    return;
  } else if (B > D) {
    console.log("Aoki");
    return;
  } else {
    console.log("Takahashi");
    return;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
