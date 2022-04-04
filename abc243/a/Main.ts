function Main(input: string[]) {
  const parsedInput = input[0].split(" ").map((value) => parseInt(value, 10));

  let V = parsedInput.shift();
  const user = ["F", "M", "T"];
  let currentUser = 0;

  while (V >= parsedInput[currentUser]) {
    V -= parsedInput[currentUser++];
    currentUser = currentUser % 3;
  }

  console.log(user[currentUser]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
