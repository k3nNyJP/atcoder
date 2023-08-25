function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));

  const S = input[1];
  const C = input[2].split(" ").map((value) => parseInt(value, 10));

  const parsedS: string[] = Array(M).fill("");

  for (let i = 0; i < N; i++) {
    parsedS[C[i] - 1] += S[i];
  }

  const rotatedS = parsedS.map(
    (str) => str[str.length - 1] + str.substring(0, str.length - 1)
  );

  let ans = "";

  for (let i = 0; i < N; i++) {
    ans += rotatedS[C[i] - 1][0];
    rotatedS[C[i] - 1] = rotatedS[C[i] - 1].substring(1);
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
