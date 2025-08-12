type NumberUnit = {
  value: number;
  count: number;
};

function Main(input: string[]) {
  const Q = parseInt(input[0], 10);
  let A: NumberUnit[] = [];

  const answer: BigInt[] = [];

  for (let i = 1, aIndex = 0; i <= Q; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    switch (query[0]) {
      case 1:
        const [_1, count, value] = query;
        A.push({ count, value });
        break;
      case 2:
        let [_2, k] = query;
        let removed = BigInt(0);

        while (k > 0) {
          const removeCount = Math.min(A[aIndex].count, k);

          removed += BigInt(A[aIndex].value) * BigInt(removeCount);
          k -= removeCount;
          A[aIndex].count -= removeCount;

          if (A[aIndex].count <= 0) {
            aIndex++;
          }
        }

        answer.push(removed);
    }
  }

  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
