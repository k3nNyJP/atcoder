function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  const K = firstLine[1];

  const candies = input[1].split(" ").map((value) => parseInt(value, 10));

  let count = new Set(candies.slice(0, K)).size;
  let max = count;

  for (let i = 1; i <= N - K; ) {
    const get = candies.slice(i, i + K);
    count = new Set(get).size;
    max = count > max ? count : max;

    i += get.findIndex((color) => color !== get[0]);
  }

  console.log(max);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
