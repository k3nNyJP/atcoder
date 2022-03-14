function Main(input: string[]) {
  const Q = parseInt(input[0], 10);
  const A = [];

  for (let i = 1; i <= Q; i++) {
    const query = input[i].split(" ").map((value) => parseInt(value, 10));

    switch (query[0]) {
      case 1:
        A.splice(
          A.findIndex((value) => value > query[1]),
          0,
          query[1]
        );
      case 2:
      case 3:
    }

    console.log(A);
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
