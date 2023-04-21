function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const statA = new Map<number, number>();
  const A = input[1].split(" ").map((value) => {
    const parsedValue = parseInt(value, 10);
    statA.set(parsedValue, (statA.get(parsedValue) || 0) + 1);

    return parsedValue;
  });

  let ans = 0;

  const existValues = [...statA.keys()];

  for (let i = 1; i < existValues.length; i++) {
    for (let j = 0; j < i; j++) {
      ans +=
        Math.pow(existValues[i] - existValues[j], 2) *
        (statA.get(existValues[i]) || 1) *
        (statA.get(existValues[j]) || 1);
    }
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
