function Main(input) {
    const firstLine = input[0].split(" ");
    const N = parseInt(firstLine[0], 10);
    const Q = parseInt(firstLine[1], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const dict = [];
    for (let i = 0; i < N; i++) {
        if (dict[A[i]] === undefined) {
            dict[A[i]] = [];
        }
        dict[A[i]].push(i + 1);
    }
    console.log(dict);
    for (let i = 0; i < Q; i++) {
        const query = input[i + 2].split(" ").map((value) => parseInt(value, 10));
        console.log(dict[query[0]] ? dict[query[0]][query[1] - 1] || -1 : -1);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
