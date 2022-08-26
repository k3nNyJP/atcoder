function checkDifference(letters: { head: number[]; tail: number[] }) {
  const difference = { head: [] as number[], tail: [] as number[] };

  for (let i = 0; i < letters.head.length; i++) {
    if (letters.head[i] !== letters.tail[i]) {
      difference.head.push(letters.head[i]);
      difference.tail.push(letters.tail[i]);
    }
  }

  return difference;
}

function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const head = A.slice(0, Math.ceil(N / 2));
  const tail = A.slice(Math.floor(N / 2)).reverse();

  const difference = checkDifference({ head, tail });
  let result = 0;

  while(difference.head.length > 0) {
    const pivot = { from: difference.head[0], to: difference.tail[0] };

    // difference.head = difference.head.map((value) => )
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
