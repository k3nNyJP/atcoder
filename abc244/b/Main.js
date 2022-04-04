function Main(input) {
    const N = parseInt(input[0], 10);
    const T = input[1];
    const actions = [
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
    ];
    const position = [0, 0];
    for (let i = 0, direction = 0; i < N; i++) {
        const query = T[i];
        if (query === "R") {
            direction++;
        }
        else {
            position[0] += actions[direction % 4][0];
            position[1] += actions[direction % 4][1];
        }
    }
    console.log(position.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
