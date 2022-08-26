function Main(input) {
    const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
    const path = Array(N)
        .fill(true)
        .map((value, index) => new Set([index + 1]));
    for (let i = 1; i <= M; i++) {
        const road = input[i].split(" ").map((value) => parseInt(value, 10));
        path[road[0] - 1].add(road[1]);
    }
    while (true) {
        let changed = false;
        for (let i = 0; i < N; i++) {
            const start = path[i];
            const pathCount = start.size;
            start.forEach((next) => {
                path[next - 1].forEach((end) => start.add(end));
            });
            changed = changed || start.size > pathCount;
        }
        if (!changed)
            break;
    }
    console.log(path.reduce((count, start) => count + start.size, 0));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
