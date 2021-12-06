function Main(input: string[]) {
  const words = input[0].split(" ");
  const S = words[0];
  const T = words[1];

  console.log(S < T ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
