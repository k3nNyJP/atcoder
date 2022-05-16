const dictionary: number[][] = [];

function makeArray(index: number): number[] {
  if (index === 1) {
    return [1];
  } else if (dictionary[index]) {
    return dictionary[index];
  }

  const result = [...makeArray(index - 1), index, ...makeArray(index - 1)];
  dictionary[index] = result;
  return result;
}

function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  console.log(makeArray(N).join(" "));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
