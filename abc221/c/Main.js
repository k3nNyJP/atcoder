function mul(A, B) {
    const maxA = parseInt(A.sort((a, b) => b - a).join(""), 10);
    const maxB = parseInt(B.sort((a, b) => b - a).join(""), 10);
    return !isNaN(maxA) && !isNaN(maxB) ? maxA * maxB : 0;
}
function pick(pickList, searchList, remainList) {
    let max = mul(pickList, remainList);
    for (let i = 0; i < searchList.length; i++) {
        const nextSearchList = searchList.slice(i + 1);
        const nextRemainList = [
            ...remainList.slice(0, i),
            ...remainList.slice(i + 1),
        ];
        console.log(remainList, i, nextRemainList);
        const mul = pick([...pickList, searchList[i]], nextSearchList, nextRemainList);
        if (mul > max) {
            max = mul;
        }
    }
    return max;
}
function Main(input) {
    const N = input[0].split("").map((value) => parseInt(value, 10));
    const maxSearchDigits = Math.ceil(N.length / 2);
    const ans = pick([], N, N);
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
