function Main(input: string[]) {
  const firstLine = input[0].split(" ");

  const S = firstLine[0].split("").sort();
  const K = parseInt(firstLine[1]);

  console.log(S);


}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
