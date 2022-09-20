function findTriangle(paths, visitedNodes) {
  let ans = 0;
  for (let j = 0; j < visitedNodes.length - 1; j++) {
    for (let k = j + 1; k < visitedNodes.length; k++) {
      const found = paths.find(
        (path) => path[0] === visitedNodes[j] && path[1] === visitedNodes[k]
      );
      if (found) {
        ans++;
      }
    }
  }

  return ans;
}

function Main(input: string[]) {
  const [N, M] = input
    .shift()!
    .split(" ")
    .map((value) => parseInt(value, 10));
  const paths = input
    .map((line) => line.split(" ").map((value) => parseInt(value, 10)))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let ans = 0;
  let visitedNodes: number[] = [];

  for (let i = 0, target = paths[0][0]; i < M; i++) {
    let path = paths[i];

    if (target !== path[0]) {
      ans += findTriangle(paths, visitedNodes);
      visitedNodes = [];
      target = path[0];
    }

    visitedNodes.push(path[1]);
  }

  if (visitedNodes.length > 1) {
    ans += findTriangle(paths, visitedNodes);
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
