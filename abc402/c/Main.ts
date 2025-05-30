function Main(input: string[]) {
  const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
  const recipes = input
    .slice(1, M + 1)
    .map((recipe) => recipe.replace(/^[0-9]+\s/, "") + " ");
  const B = input[M + 1].split(" ");

  const answers: number[] = [];
  let overcomeed = 0;
  for (let i = 0; i < N; i++) {
    const overcome = B[i];
    for (let j = 0; j < recipes.length; j++) {
      recipes[j] = recipes[j].replace(new RegExp(`${overcome} `), "");
      if (recipes[j].length === 0) {
        overcomeed++;
        recipes.splice(j, 1);
        j--;
      }
    }

    answers.push(overcomeed);
  }

  console.log(answers.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
