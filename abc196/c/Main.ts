function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  let ans = 0;

  for (let i = 1; ; i++) {
    if (parseInt(`${i}${i}`, 10) > N) {
      break;
    }
    ans++;
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
