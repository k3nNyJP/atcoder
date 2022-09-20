function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map((value) => parseInt(value, 10));
  const grid = input.slice(1);

  const position = [0, 0];
  let turn = 0;

  while (turn < H * W) {
    const cell = grid[position[0]][position[1]];
    let end = false;

    switch (cell) {
      case "U":
        end = position[0] < 1;
        position[0] -= end ? 0 : 1;
        break;
      case "D":
        end = position[0] >= H - 1;
        position[0] += end ? 0 : 1;
        break;
      case "L":
        end = position[1] < 1;
        position[1] -= end ? 0 : 1;
        break;
      case "R":
        end = position[1] >= W - 1;
        position[1] += end ? 0 : 1;
        break;
    }

    if (end) {
      break;
    }
    turn++;
  }

  console.log(turn >= H * W ? "-1" : `${position[0] + 1} ${position[1] + 1}`);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
