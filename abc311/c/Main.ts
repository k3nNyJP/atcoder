function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const steps = [1];
  const reachMap = { 1: 1 };
  let node = 1;

  while (true) {
    const nextNode = A[node - 1];
    const reachedStep = reachMap[nextNode];

    if (reachedStep) {
      const answer = steps.slice(reachedStep - 1);
      console.log(`${answer.length}\n${answer.join(" ")}`);
      return;
    }

    node = nextNode;
    steps.push(node);
    reachMap[node] = steps.length;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
