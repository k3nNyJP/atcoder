function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort();
    let result = 0;
    console.log(A);
    for (let i = 0; i < N;) {
        let j = i + 1;
        while (A[i] === A[j]) {
            j++;
        }
        result += (j - i) * (N - j);
        i = j;
    }
    console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
