function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));

  const N = firstLine[2];

  const numbers: number[][] = [];
  const rows: number[] = [];
  const columns: number[] = [];

  for (let i = 1; i <= N; i++) {
    const number = input[i].split(" ").map((value) => parseInt(value, 10));

    numbers.push(number);
    rows.push(number[0]);
    columns.push(number[1]);
  }

  rows
    .filter((value, index) => rows.indexOf(value) === index)
    .sort((a, b) => a - b);
  columns
    .filter((value, index) => rows.indexOf(value) === index)
    .sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    const row = rows.indexOf(numbers[i][0]);
    const column = columns.indexOf(numbers[i][1]);
    console.log(`${row} ${column}`);
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
