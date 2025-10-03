function Main(input: string[]) {
  const [N, K, X] = input[0].split(" ").map((value) => parseInt(value, 10));

  const combined: string[] = [];

  const combine = (combinedString: string, remain: number) => {
    if (remain <= 0) {
      combined.push(combinedString);
      return;
    }

    for (let i = 1; i <= N; i++) {
      const nextBlock = input[i];
      combine(combinedString + nextBlock, remain - 1);
    }
  };

  combine("", K);

  console.log(combined.sort()[X - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
