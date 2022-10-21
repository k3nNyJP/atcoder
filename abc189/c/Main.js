function search(A, l, r) {
    const searchTarget = A.slice(l, r);
    const min = Math.min(...searchTarget);
    const result = min * (r - l);
    const minIndex = searchTarget.indexOf(min);
    if (l === r) {
        return result;
    }
    const leftResult = search(A, l, minIndex);
    const rightResult = search(A, minIndex + 1, r);
    return Math.max(result, leftResult, rightResult);
}
function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    console.log(search(A, 0, N));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
