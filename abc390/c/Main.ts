function Main(input: string[]) {
  const [H, W] = input[0].split(" ").map(Number);
  const S = input.slice(1);

  let left = W + 1;
  let top = H + 1;
  let right = -1;
  let bottom = -1;

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (S[i][j] === "#") {
        left = Math.min(left, j);
        top = Math.min(top, i);
        right = Math.max(right, j);
        bottom = Math.max(bottom, i);
      }
    }
  }

  for (let i = top; i <= bottom; i++) {
    for (let j = left; j <= right; j++) {
      if (S[i][j] === ".") {
        console.log("No");
        return;
      }
    }
  }

  console.log("Yes");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
