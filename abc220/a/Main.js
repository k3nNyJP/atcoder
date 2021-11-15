function Main(input) {
    const parsedInput = input.split("\n");
    const firstLine = parsedInput[0]
        .split(" ")
        .map((value) => parseInt(value, 10));
    const A = firstLine[0];
    const B = firstLine[1];
    const C = firstLine[2];
    let result = -1;
    for (let multiple = C; multiple <= B; multiple += C) {
        if (multiple >= A) {
            result = multiple;
            break;
        }
    }
    console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
