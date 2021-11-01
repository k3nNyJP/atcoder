function Main(input: string) {
  const parsedInput = input.split("\n");

  const S = parsedInput[0];
  const T = parsedInput[1];

  if (S === T) {
    console.log("Yes");
    return;
  }

  for (let i = 0; i < T.length; i++) {
    if (S[i] === T[i]) {
      continue;
    }

    if (i === T.length - 1) {
      console.log("No");
      break;
    }

    const swapped = T.substring(0, i) + T[i + 1] + T[i] + T.substring(i + 2);

    console.log(S === swapped ? "Yes" : "No");
    break;
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
