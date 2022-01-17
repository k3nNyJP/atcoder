function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const S = firstLine[0];
  let T = firstLine[1];
  let X = firstLine[2];

  if (S > T) {
    T += 24;

    if (S > X) {
      X += 24;
    }
  }

  console.log(S <= X && X < T ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
