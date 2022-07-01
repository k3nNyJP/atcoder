function Main(input: string[]) {
  const metals = input[0].split(" ").map((value) => parseInt(value, 10));

  console.log(metals[0] === 0 ? "Silver" : metals[1] === 0 ? "Gold" : "Alloy");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
