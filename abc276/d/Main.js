function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const countTwoDivided = [];
    const countThreeDivided = [];
    let remain = 1;
    let minTwoDivided = 1000000000, minThreeDivided = 1000000000;
    for (let i = 0; i < N; i++) {
        let Ai = A[i];
        let countAiTwoDivided = 0;
        let countAiThreeDivided = 0;
        let canDivide = true;
        while (canDivide) {
            canDivide = false;
            if (Ai % 2 === 0) {
                countAiTwoDivided++;
                Ai /= 2;
                canDivide = true;
            }
            if (Ai % 3 === 0) {
                countAiThreeDivided++;
                Ai /= 3;
                canDivide = true;
            }
        }
        countTwoDivided[i] = countAiTwoDivided;
        countThreeDivided[i] = countAiThreeDivided;
        if (i === 0) {
            remain = Ai;
        }
        else if (Ai !== remain) {
            console.log(-1);
            return;
        }
        if (minTwoDivided > countAiTwoDivided) {
            minTwoDivided = countAiTwoDivided;
        }
        if (minThreeDivided > countAiThreeDivided) {
            minThreeDivided = countAiThreeDivided;
        }
    }
    let ans = countTwoDivided.reduce((sum, count) => (sum += count - minTwoDivided), 0);
    ans += countThreeDivided.reduce((sum, count) => (sum += count - minThreeDivided), 0);
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
