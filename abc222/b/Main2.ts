function Main(input: string) {
  const parsedInput = input.split("\n");
  const firstLine = parsedInput[0].split(" ").map((value) => parseInt(value, 10));
  const A = parsedInput[1].split(" ").map((value) => parseInt(value, 10));

  const N = firstLine[0];
  const P = firstLine[1];

  let result = 0;

  for (let i = 0; i < N; i++) {
    result += A[i] < P ? 1 : 0;
  }

  console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
