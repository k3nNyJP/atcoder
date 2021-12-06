function Main(input: string[]) {
  const grid = input.map((row) => row.split(""));

  if (grid[0][0] === "." && grid[1][1] === ".") {
    console.log("No");
    return;
  } else if (grid[0][1] === "." && grid[1][0] === ".") {
    console.log("No");
    return;
  }

  console.log("Yes");
  return;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
