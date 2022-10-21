function Main(input: string[]) {
  const [N, X] = input[0].split(" ").map((value) => parseInt(value, 10));

  for (let i = 1, drunk = 0; i <= N; i++) {
    const drink = input[i].split(" ").map((value) => parseInt(value, 10));
    const alcohol = drink[0] * drink[1];

    drunk += alcohol;
    if (drunk > X * 100) {
      console.log(i);
      return;
    }
  }

  console.log(-1);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
