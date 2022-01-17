function Main(input: string[]) {
  console.log(input[0] === "Hello,World!" ? "AC" : "WA");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
