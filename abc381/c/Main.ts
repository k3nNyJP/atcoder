function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const S = input[1].split("/");

  let longest = 0;

  for (let i = 0; i < S.length - 1; i++) {
    const prev = S[i];
    const next = S[i + 1];

    const numberLength = Math.min(countOnesAtEnd(prev), countTwosAtStart(next));
    longest = Math.max(longest, numberLength * 2 + 1);
  }

  console.log(longest);
}

function countOnesAtEnd(str: string): number {
  const searchTarget = /1*$/;

  return str.match(searchTarget)?.[0].length ?? 0;
}

function countTwosAtStart(str: string): number {
  const searchTarget = /^2*/;

  return str.match(searchTarget)?.[0].length ?? 0;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
