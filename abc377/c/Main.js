function Main(input) {
    const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
    // 周囲2マス分広く取る（範囲外のケア）
    const cells = new Array(N + 4)
        .fill(false)
        .map(() => new Array(N + 4).fill(true));
    for (let i = 1; i <= M; i++) {
        const knight = input[i].split(" ").map((value) => parseInt(value, 10));
        // コマがある位置
        cells[knight[0] + 1][knight[1] + 1] = false;
        // コマが移動して取られる位置
        cells[knight[0] + 3][knight[1] + 2] = false;
        cells[knight[0] + 2][knight[1] + 3] = false;
        cells[knight[0]][knight[1] + 3] = false;
        cells[knight[0] - 1][knight[1] + 2] = false;
        cells[knight[0] - 1][knight[1]] = false;
        cells[knight[0]][knight[1] - 1] = false;
        cells[knight[0] + 2][knight[1] - 1] = false;
        cells[knight[0] + 3][knight[1]] = false;
    }
    let safe = 0;
    for (let i = 2; i < N + 2; i++) {
        for (let j = 2; j < N + 2; j++) {
            if (cells[i][j]) {
                safe++;
            }
        }
    }
    console.log(safe);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
