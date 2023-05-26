function searchSnuke(S) {
    const snuke = "snuke";
    const ekuns = "ekuns";
    let answer;
    for (let row = 0; row < S.length; row++) {
        [snuke, ekuns].forEach((keyword, reverse) => {
            const foundIndex = S[row].indexOf(keyword);
            if (foundIndex !== -1) {
                answer = new Array(5)
                    .fill(row)
                    .map((r, i) => [r, reverse ? foundIndex - i : foundIndex + i]);
            }
        });
    }
    return answer;
}
function Main(input) {
    const [H, W] = input[0].split(" ").map((value) => parseInt(value, 10));
    const S = input.slice(1, H + 1);
    let answer;
    answer = searchSnuke(S);
    if (answer) {
        console.log(answer.map((point) => `${point[0] + 1} ${point[1] + 1}`).join("\n"));
        return;
    }
    const flippedS = new Array(W).fill("");
    S.forEach((row) => {
        row.split("").forEach((char, index) => {
            flippedS[index] += char;
        });
    });
    answer = searchSnuke(flippedS);
    if (answer) {
        console.log(answer.map((point) => `${point[1] + 1} ${point[0] + 1}`).join("\n"));
        return;
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
