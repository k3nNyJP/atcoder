function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const parents = input[1].split(" ").map((value) => parseInt(value, 10));

  let ans = 0;
  let person = N;

  do {
    const parent = parents[person - 2];
    ans++;
    person = parent;
  } while (person !== 1);

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
