function Main(input) {
    const numbers = input[0].split(" ");
    const A = numbers[0];
    const B = numbers[1];
    for (let i = A.length - 1, j = B.length - 1; i >= 0 && j >= 0; i--, j--) {
        if (parseInt(A[i], 10) + parseInt(B[j], 10) > 9) {
            console.log("Hard");
            return;
        }
    }
    console.log("Easy");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
