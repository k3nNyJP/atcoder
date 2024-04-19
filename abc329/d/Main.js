function Main(input) {
    const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
    const elections = input[1].split(" ").map((value) => parseInt(value, 10));
    let max = 0;
    let winner = 1;
    const result = new Map();
    for (let i = 0; i < M; i++) {
        const election = elections[i];
        const count = (result.get(election) ?? 0) + 1;
        result.set(election, count);
        if (count > max || (count === max && winner > election)) {
            max = count;
            winner = election;
        }
        console.log(winner);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
