const fs = require("fs");

function readInput(): Promise<string> {
  process.stdin.resume();
  return new Promise((resolve: (data: string) => void) =>
    process.stdin.once("data", (data) => resolve(data.toString()))
  ).finally(() => process.stdin.pause());
}

async function Main() {
  const N = parseInt(await readInput(), 10);
  const numbers = Array(2 * N + 1).fill(true);

  while (true) {
    const hand = numbers.indexOf(true);
    numbers[hand] = false;
    process.stdout.write((hand + 1).toString() + "\n", "utf8");

    const enemyHand = parseInt(await readInput(), 10);
    if (enemyHand === 0) {
      return;
    }

    numbers[enemyHand - 1] = false;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main();
