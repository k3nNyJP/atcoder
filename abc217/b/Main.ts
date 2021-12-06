function Main(input: string[]) {
  const contestList = ["ABC", "ARC", "AGC", "AHC"];

  const result = contestList.filter((contest) => !input.includes(contest));

  console.log(result[0]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
