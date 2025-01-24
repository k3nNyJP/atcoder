function Main(input: string[]) {
  const K = parseInt(input[0], 10);
  const S = input[1];
  const T = input[2];

  if (S === T) {
    console.log("Yes");
    return;
  }

  const lengthDiff = S.length - T.length;

  switch (Math.abs(lengthDiff)) {
    case 0:
      // 文字列長が同じ
      for (let i = 0, diffs = 0; i < S.length; i++) {
        if (S[i] !== T[i]) {
          diffs++;
        }
        if (diffs > 1) {
          console.log("No");
          return;
        }
      }

      console.log("Yes");
      return;
    case 1:
      // どちらかが1文字多い
      const shorter = lengthDiff > 0 ? T : S;
      const longer = lengthDiff > 0 ? S : T;

      for (let i = 0, foundDiff = false; i < shorter.length; i++) {
        if (shorter[i] !== longer[foundDiff ? i + 1 : i]) {
          if (foundDiff) {
            console.log("No");
            return;
          }

          foundDiff = true;
        }
      }

      console.log("Yes");
      return;
    default:
      // 文字列長が2以上違うなら変換できない
      console.log("No");
      return;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
