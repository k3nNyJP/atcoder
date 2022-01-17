function Main(input: string[]) {
  for (let number = BigInt(input[0]), ans = 0; ; number = number / BigInt(2)) {
    if (number <= 1) {
      console.log(ans);
      return;
    }
    ans++;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
