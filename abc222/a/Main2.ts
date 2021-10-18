function Main(input: string) {
  console.log(input.split("\n")[0].padStart(4, "0000"))
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
