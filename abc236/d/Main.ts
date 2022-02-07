function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const joyfullness = [];

  for (let i = 1; i <= N * 2 - 1; i++) {
    joyfullness[i - 1] = input[i]
      .split(" ")
      .map((value) => parseInt(value, 10).toString(2));
  }

  for (let i = 0; i < N; i++) {

  }

}

function


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
