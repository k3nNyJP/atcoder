function Main(input: string[]) {
  const S = input[0];

  let first = S;
  let last = S;

  for (let i = 1; i < S.length; i++) {
    const rotated = S.substring(i) + S.substring(0, i);

    first = first < rotated ? first : rotated;
    last = last > rotated ? last : rotated;
  }

  console.log(first);
  console.log(last);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
