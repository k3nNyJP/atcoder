function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  let possibilities = input[1].split(" ");

  for (let i = 2; i < N; i++) {
    const nodes = input[i].split(" ");
    possibilities = possibilities.filter((node) => nodes.includes(node));

    if (possibilities.length === 0) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
