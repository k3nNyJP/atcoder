function Main(input) {
    const [H, W, rs, cs] = input[0]
        .split(" ")
        .map((value) => parseInt(value, 10));
    const N = parseInt(input[1], 10);
    const wallsByRow = [...Array(H + 1)].map(() => []);
    const wallsByColumn = [...Array(W + 1)].map(() => []);
    console.log(wallsByRow, wallsByColumn);
    for (let i = 2; i < 2 + N; i++) {
        const wall = input[i].split(" ").map((value) => parseInt(value, 10));
        console.log(wall);
        wallsByRow[wall[0]].push(wall[1]);
        wallsByColumn[wall[1]].push(wall[0]);
    }
    console.log(wallsByRow, wallsByColumn);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
