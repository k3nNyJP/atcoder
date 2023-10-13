interface Cell {
  x: number;
  y: number;
}

function Main(input: string[]) {
  const [N, M, H, K] = input[0].split(" ").map((value) => parseInt(value, 10));
  const moves = input[1];
  const items: boolean[][] = [];
  for (let i = 2; i < 2 + M; i++) {
    const itemCell = input[i].split(" ").map((value) => parseInt(value, 10));

    if (!items[itemCell[0]]) {
      items[itemCell[0]] = [];
    }

    items[itemCell[0]][itemCell[1]] = true;
  }

  const position: Cell = { x: 0, y: 0 };
  let stamina = H;

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];

    switch (move) {
      case "R":
        position.x += 1;
        break;
      case "L":
        position.x -= 1;
        break;
      case "U":
        position.y += 1;
        break;
      case "D":
        position.y -= 1;
        break;
    }

    if (--stamina < 0) {
      console.log("No");
      return;
    }

    if (stamina < K && items[position.x] && items[position.x][position.y]) {
      stamina = K;
      items[position.x][position.y] = false;
    }
  }

  console.log("Yes");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
