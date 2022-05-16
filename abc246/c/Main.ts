function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  let K = firstLine[1];
  const X = firstLine[2];
  const A = input[1].split(" ");

  let fullDiscountable = 0;
  let remainList = [];

  for (let i = 0; i < N; i++) {
    const price = parseInt(A[i], 10);

    fullDiscountable += Math.floor(price / X);
    const insertIndex = remainList.indexOf((remain) => remain < price);

    if (insertIndex === -1) {
      remainList.push(price % X);
    } else {
      remainList.splice(insertIndex, 0, price % X);
    }
  }


}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
