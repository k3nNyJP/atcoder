function Main(input) {
    const [H, W] = input[0].split(" ").map((value) => parseInt(value, 10));
    const dotsS = Array(W)
        .fill(false)
        .map(() => []);
    const dotsT = Array(W)
        .fill(false)
        .map(() => []);
    for (let i = 1; i <= H; i++) {
        const line = input[i];
        for (let j = 0; j < W; j++) {
            if (line[j] === ".") {
                dotsS[j].push(i);
            }
        }
    }
    for (let i = H + 1; i <= 2 * H; i++) {
        const line = input[i];
        for (let j = 0; j < W; j++) {
            if (line[j] === ".") {
                dotsT[j].push(i - H);
            }
        }
    }
    for (let i = 0; i < dotsS.length; i++) {
        const target = dotsS[i];
        const samePattern = dotsT.findIndex((dots) => target.every((position, index) => dots[index] === position));
        console.log(samePattern);
        if (samePattern === -1) {
            console.log("No");
            return;
        }
        dotsT.splice(samePattern, 1);
    }
    console.log("Yes");
    return;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
