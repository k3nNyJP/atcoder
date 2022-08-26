function Main(input) {
    const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    for (let i = 2; i < Q + 2; i++) {
        let query = parseInt(input[i], 10);
        let excluded = 0;
        let excludedIndex = 0;
        do {
            excluded = 0;
            for (; excludedIndex < N; excludedIndex++) {
                if (A[excludedIndex] <= query) {
                    excluded++;
                }
                else {
                    break;
                }
            }
            query += excluded;
        } while (excluded > 0);
        console.log(query);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
