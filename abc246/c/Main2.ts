function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
  const N = firstLine[0];
  let K = firstLine[1];
  const X = firstLine[2];
  const A = input[1]
    .split(" ")
    .map((value) => parseInt(value, 10))
    .sort((a, b) => b - a);

  while (K > 0 && A.length > 0) {
    const highestPrice = A.shift();
    const useCount = Math.min(Math.floor(highestPrice / X), K) || 1;

    const discountPrice = Math.max(highestPrice - X * useCount, 0);

    K -= useCount;

    if (discountPrice === 0) {
      continue;
    }

    const nextIndex = A.findIndex((price) => price < discountPrice);
    if (nextIndex === -1) {
      A.push(discountPrice);
    } else {
      A.splice(nextIndex, 0, discountPrice);
    }
  }

  console.log(A.length > 0 ? A.reduce((total, price) => total + price) : 0);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
