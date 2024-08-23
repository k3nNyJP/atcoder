function searchRoute(visited, S, M, count) {
    // 探索終了
    if (visited === "o".repeat(M)) {
        return count;
    }
    const results = S.map((Si, SIndex) => {
        let found = "";
        for (let i = 0; i < Si.length; i++) {
            if (visited[i] === "o" || Si[i] === "o") {
                found += "o";
            }
            else {
                found += "x";
            }
        }
        return searchRoute(found, S.slice(SIndex + 1), M, count + 1);
    });
    return Math.min(...results);
}
function Main(input) {
    const [N, M] = input
        .shift()
        .split(" ")
        .map((value) => parseInt(value, 10));
    const S = input;
    const answer = searchRoute("x".repeat(M), S, M, 0);
    console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
