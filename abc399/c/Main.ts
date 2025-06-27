function findLoop(
  graph: number[][],
  edgeOfLoop: number[],
  edge: [number, number],
): boolean {



  for (const neighbor of graph[current]) {
    if (neighbor === previous) {
      continue;
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

function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((v) => parseInt(v, 10));

  const graph: number[][] = [];
  const edgeOfLoop: number[] = [];
  let answer = 0;

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map((v) => parseInt(v, 10));
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);

    if (findLoop(graph, edgeOfLoop, a, b, b)) {
      answer++;
    }
  }

  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
