interface Medicine {
  day: number;
  amount: number;
}

function Main(input: string[]) {
  const [N, K] = input[0].split(" ").map((value) => parseInt(value, 10));

  const medicines: Medicine[] = input.slice(1, N + 1).map((line) => {
    const parsed = line.split(" ").map((value) => parseInt(value, 10));
    return {
      day: parsed[0],
      amount: parsed[1],
    };
  });

  medicines.sort((a, b) => b.day - a.day);

  for (let i = 0, taken = 0; i < N; i++) {
    taken += medicines[i].amount;

    if (taken > K) {
      console.log(medicines[i].day + 1);
      return;
    }
  }

  console.log(1);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
