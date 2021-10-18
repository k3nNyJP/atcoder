function Main(input: string) {
  const parsedInput = input.split("\n");
  const firstLine = parsedInput[0].split(" ").map((value) => parseInt(value, 10));
  const A = parsedInput[1].split(" ").map((value) => parseInt(value, 10));

  const N = firstLine[0];
  const P = firstLine[1];

  // console.log(A.filter((point) => point < P).length);
  console.log(A.reduce((result, score) => {
    return score < P ? result + 1 : result
  }, 0));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
