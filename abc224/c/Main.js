function Main(input) {
    const N = parseInt(input[0], 10);
    const pointList = input
        .slice(1)
        .map((point) => point.split(" ").map((value) => parseInt(value, 10)));
    let result = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                const a = pointList[i];
                const b = pointList[j];
                const c = pointList[k];
                const gradAB = (a[1] - b[1]) / (a[0] - b[0]);
                const gradBC = (b[1] - c[1]) / (b[0] - c[0]);
                if (gradAB !== gradBC) {
                    result++;
                }
            }
        }
    }
    console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
