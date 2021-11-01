function Main(input: string) {
  const parsedInput = input.split("\n");

  const S = parsedInput[0];
  const T = parsedInput[1];

  if (S === T) {
    console.log("Yes");
    return;
  }

  let swapped = 0;
  for (let i = 0; i < T.length; i++) {
    if (S[i] === T[i]) {
      continue;
    }

    if (S[i + 1] !== T[i] || S[i] !== T[i + 1]) {
      console.log("No");
      return;
    }

    i++;
    swapped++;
  }

  console.log(swapped === 1 ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
