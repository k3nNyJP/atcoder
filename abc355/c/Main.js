function Main(input) {
    const [N, T] = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const hits = {
        rows: new Array(N).fill(N),
        columns: new Array(N).fill(N),
        diagonals: new Array(2).fill(N),
    };
    for (let i = 0; i < T; i++) {
        const number = A[i];
        const row = Math.floor((number - 1) / N);
        const column = (number - 1) % N;
        const isLeftTopToRightBottom = (number - 1) % (N + 1) === 0;
        const isRightTopToLeftBottom = (number - 1) % (N - 1) === 0 && (number - 1) / (N - 1) <= N;
        hits.rows[row]--;
        hits.columns[column]--;
        if (hits.rows[row] === 0 || hits.columns[column] === 0) {
            console.log(i + 1);
            return;
        }
        if (isLeftTopToRightBottom) {
            hits.diagonals[0]--;
        }
        if (isRightTopToLeftBottom) {
            hits.diagonals[1]--;
        }
        if (hits.diagonals[0] === 0 || hits.diagonals[1] === 0) {
            console.log(i + 1);
            return;
        }
    }
    console.log(-1);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
