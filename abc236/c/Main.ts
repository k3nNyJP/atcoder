function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const M = firstLine[1];

  const S = input[1].split(" ");
  const T = input[2].split(" ");

  for (let i = 0, j = 0; i < N; i++) {
    if (S[i] === T[j]) {
      console.log("Yes");
      j++;
    } else {
      console.log("No");
    }
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
