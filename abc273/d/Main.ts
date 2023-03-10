function Main(input: string[]) {
  const [H, W, rs, cs] = input[0]
    .split(" ")
    .map((value) => parseInt(value, 10));
  const N = parseInt(input[1], 10);

  const wallsByRow: number[][] = [...Array(H + 1)].map(() => []);
  const wallsByColumn: number[][] = [...Array(W + 1)].map(() => []);

  for (let i = 2; i < 2 + N; i++) {
    const wall = input[i].split(" ").map((value) => parseInt(value, 10));

    wallsByRow[wall[0]].push(wall[1]);
    wallsByColumn[wall[1]].push(wall[0]);
  }

  const Q = parseInt(input[N + 2]);
  let position = [rs, cs];
  for (let i = N + 3; i < N + 3 + Q; i++) {
    const query = input[i].split(" ");
    const direction = query[0];
    const length = parseInt(query[1]);

    switch(direction) {
      case "U":
        const currentColumn = wallsByColumn[position[]]
      case "D":
      case "L":
      case "R":
    }
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
