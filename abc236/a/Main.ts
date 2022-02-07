function Main(input: string[]) {
  const word = input[0].split("");
  const swap = input[1].split(" ").map((value) => parseInt(value, 10) - 1);

  const tmp = word[swap[0]];
  word[swap[0]] = word[swap[1]];
  word[swap[1]] = tmp;

  console.log(word.join(""));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
