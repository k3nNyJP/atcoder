function findLoop(graph, visited, current, previous, origin) {
    visited[current] = true;
    for (const neighbor of graph[current]) {
        if (neighbor === previous) {
            continue; // Skip the edge we came from
        }
        if (neighbor === origin) {
            return true;
        }
        if (!visited[neighbor]) {
            if (findLoop(graph, visited, neighbor, current, origin)) {
                return true;
            }
        }
    }
    return false;
}
function Main(input) {
    const [N, M] = input[0].split(" ").map((v) => parseInt(v, 10));
    const graph = [];
    let answer = 0;
    for (let i = 1; i <= M; i++) {
        const [a, b] = input[i].split(" ").map((v) => parseInt(v, 10));
        if (!graph[a])
            graph[a] = [];
        if (!graph[b])
            graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
        if (findLoop(graph, new Array(N + 1).fill(false), a, b, b)) {
            console.log("found: ", a, b);
            answer++;
        }
    }
    console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
