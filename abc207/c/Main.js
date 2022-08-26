function Main(input) {
    const N = parseInt(input.shift() || "", 10);
    const rangeList = input.map((line) => line.split(" ").map((value) => parseInt(value, 10)));
    let result = 0;
    for (let i = 0; i < N - 1; i++) {
        const a = rangeList[i];
        for (let j = i + 1; j < N; j++) {
            const b = rangeList[j];
            // 絶対に重ならない
            if (a[2] < b[1] || a[1] > b[2]) {
                continue;
            }
            if (a[2] === b[1]) {
                if (a[0] === 2 || a[0] === 4 || b[0] === 3 || b[0] === 4) {
                    continue;
                }
            }
            if (a[1] === b[2]) {
                if (a[0] === 3 || a[0] === 4 || b[0] === 2 || b[0] === 4) {
                    continue;
                }
            }
            result++;
        }
    }
    console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
