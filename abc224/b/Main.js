function Main(input) {
    const firstLine = input
        .shift()
        .split(" ")
        .map((value) => parseInt(value, 10));
    const H = firstLine[0];
    const W = firstLine[1];
    const A = input.map((line) => line.split(" ").map((value) => parseInt(value, 10)));
    for (let i1 = 0; i1 < H; i1++) {
        for (let i2 = H; i2 > i1; i2--) {
            for (let j1 = 0; j1 < W; j1++) {
                for (let j2 = W; j2 > j1; j2--) {
                    const A11 = A[i1][j1];
                    const A12 = A[i1][j2];
                    const A21 = A[i2][j1];
                    const A22 = A[i2][j2];
                    if (A11 + A22 > A12 + A21) {
                        console.log("No");
                        return;
                    }
                }
            }
        }
    }
    console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
