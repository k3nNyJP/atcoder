const fact = (n: number) => (n === 1 ? n : n * fact(n - 1));

function Main(input: string[]) {
  const S = input[0];

  let o = 0;
  let x = 0;
  let q = 0; // question mark

  for (let char of S) {
    switch (char) {
      case "o":
        o++;
        break;
      case "x":
        x++;
        break;
      case "?":
        q++;
        break;
    }
  }

  if (o > 4 || (o <= 0 && q <= 0)) {
    console.log(0);
    return;
  }

  if (o === 4) {
    // oP4
    console.log(24);
    return;
  }

  // (oPo + (o+q)H(4-o)) * 4C(4-o)
  console.log(
    ((fact(o) + Math.pow(o + q, 4 - o)) * fact(4)) / (fact(4 - o) * fact(o))
  );
  return;

  // if (o === 2) {
  //   // (oPo + (o+q)H2) * 4C2
  // }

  // if (o === 1) {
  //   // (oP1 + (o+q)H3) * 4C3
  // }

  // console.log(o, x, q);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
