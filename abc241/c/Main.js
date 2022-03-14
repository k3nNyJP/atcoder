function Main(input) {
    const N = parseInt(input.shift(), 10);
    const searchTargets = /(##.?#.?#)|(#.##.#)|(#.?#.?##)|(##..##)/;
    for (let i = 0; i < N; i++) {
        const row = input[i];
        if (searchTargets.test(row)) {
            console.log("Yes");
            return;
        }
    }
    for (let i = 0; i < N; i++) {
        const column = input.map((row) => row[i]).join("");
        if (searchTargets.test(column)) {
            console.log("Yes");
            return;
        }
    }
    for (let i = 0; i < N - 5; i++) {
        for (let j = 0; j < N - 5; j++) {
            const diagonal1 = Array(6)
                .fill(0)
                .map((_, index) => input[i + index][j + index])
                .join("");
            const diagonal2 = Array(6)
                .fill(0)
                .map((_, index) => input[i + index][j + 5 - index])
                .join("");
            if (searchTargets.test(diagonal1)) {
                console.log("Yes");
                return;
            }
            if (searchTargets.test(diagonal2)) {
                console.log("Yes");
                return;
            }
        }
    }
    console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
