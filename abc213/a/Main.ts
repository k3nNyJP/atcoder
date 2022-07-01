function Main(input: string[]) {
  const firstLine = input[0].split(" ").map((value) => parseInt(value));

  const A = firstLine[0].toString(2).split("");
  const B = firstLine[1].toString(2).split("");

  let C = "";

  for (let i = 0; i < 8; i++) {
    const a = A.pop() || "0";
    const b = B.pop() || "0";

    C = (a === b ? "0" : "1") + C;
  }

  console.log(parseInt(C, 2));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
