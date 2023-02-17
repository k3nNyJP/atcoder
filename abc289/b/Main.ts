function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const a = input[1].split(" ").map((value) => parseInt(value, 10));

  const ans: number[] = [];
  for (
    let nIndex = 1, aIndex = 0, connected: number[] = [];
    nIndex <= N;
    nIndex++
  ) {
    if (nIndex === a[aIndex]) {
      connected.unshift(nIndex);
      aIndex++;
      continue;
    }

    ans.push(nIndex, ...connected);
    connected = [];
  }

  console.log(ans.join(" "));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
