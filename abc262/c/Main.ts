function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));
  A.unshift(0);

  let match = 0; // A[i] === i が成り立つ数字の数
  let ans = 0;

  for (let i = 1; i <= N; i++) {
    if (A[i] === i) {
      match++;
    } else {
      if (A[i] > i && A[A[i]] === i) {
        ans++;
      }
    }
  }

  if (match > 1) {
    ans += (match * (match - 1)) / 2;
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
