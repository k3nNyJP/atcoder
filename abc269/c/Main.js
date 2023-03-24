function Main(input) {
    const N = BigInt(input[0]);
    const binaryN = N.toString(2);
    console.log(N, binaryN);
    const answerList = [BigInt(0)];
    for (let i = 0; i < binaryN.length; i++) {
        const digit = binaryN[binaryN.length - 1 - i];
        if (digit === "1") {
            const base = BigInt(Math.pow(2, i));
            const newAnswerList = answerList.map((answer) => base + answer);
            answerList.push(...newAnswerList);
        }
    }
    console.log(answerList.join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
