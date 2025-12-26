function index(i: number, head: number, N: number) {
  return (head + i - 1) % N;
}

function Main(input: string[]) {
  const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
  let A = new Array(N).fill(false).map((_, i) => i + 1);
  let head = 0;

  const answer: number[] = [];

  for (let i = 1; i <= Q; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    switch (query[0]) {
      case 1:
        A[index(query[1], head, N)] = query[2];
        break;
      case 2:
        answer.push(A[index(query[1], head, N)]);
        break;
      case 3:
        head += query[1];
        break;
    }
  }

  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
