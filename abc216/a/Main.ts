function Main(input: string) {
  const parsedInput = input.split("\n");
  const firstLine = parseFloat(parsedInput[0]);

  const X = Math.floor(firstLine);
  const Y = (firstLine * 10) % 10;

  if (Y <= 2) {
    console.log(X + "-");
  } else if (Y <= 6) {
    console.log(X);
  } else {
    console.log(X + "+");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
