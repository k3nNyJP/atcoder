const dictionary: number[][] = [];

function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
  const A = input[1].split(" ").map((value) => BigInt(value));

  for (let i = 2; i < Q + 2; i++) {
    const query = BigInt(input[i]);

    let result = query;
    let excluded = 0;
    let excludedIndex = 0;
    do {
      excluded = 0;
      for (; excludedIndex < N; excludedIndex++) {
        if (A[excludedIndex] <= query) {
          excluded++;
        } else {
          break;
        }
      }

      result += BigInt(excluded);
    } while (excluded > 0);

    console.log(result);
    dictionary[query]
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
