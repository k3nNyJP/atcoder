function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const B = input[2].split(" ").map((value) => parseInt(value, 10));
    const listA = [];
    const listB = [];
    let hit = 0;
    let blow = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === B[i]) {
            hit++;
            continue;
        }
        listA[A[i]] = true;
        listB[B[i]] = true;
        if (listA[B[i]]) {
            blow++;
        }
        if (listB[A[i]]) {
            blow++;
        }
    }
    console.log(hit);
    console.log(blow);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
