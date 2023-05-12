function Main(input) {
    const [H, W] = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = input.slice(1, H + 1);
    const B = input.slice(H + 1, 2 * H + 1);
    const repeatedA = A.map((row) => row + row);
    repeatedA.push(...repeatedA);
    console.log("===== A =====");
    console.log(repeatedA);
    console.log("===== B =====");
    console.log(B);
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            let match = true;
            for (let row = 0; row < H; row++) {
                const target = repeatedA[i + row].slice(j, j + W);
                console.log(i, j, row, target);
                match = target === B[row];
                if (!match) {
                    break;
                }
            }
            if (match) {
                console.log("Yes");
                return;
            }
        }
    }
    console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
