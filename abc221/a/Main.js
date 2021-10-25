function Main(input) {
    const parsedInput = input.split("\n");
    const firstLine = parsedInput[0]
        .split(" ")
        .map((value) => parseInt(value, 10));
    const A = firstLine[0];
    const B = firstLine[1];
    console.log(Math.pow(32, A - B));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
