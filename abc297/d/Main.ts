function Main(input: string[]) {
  const [A, B] = input[0].split(" ").map((value) => BigInt(value));
  let count = BigInt(0);

  let bigger = A > B ? A : B;
  let smaller = A > B ? B : A;

  while (bigger !== smaller) {
    const multiplier = bigger / smaller;

    const diff = bigger - smaller * multiplier;
    count += multiplier;

    if (diff === BigInt(0)) {
      count--;
      break;
    }

    bigger = diff > smaller ? diff : smaller;
    smaller = diff > smaller ? smaller : diff;
  }

  console.log(count.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
