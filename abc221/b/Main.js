function Main(input) {
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
        if (S[i + 1] !== T[i] || S[i] !== T[i + 1] || S.substring(i + 2) !== T.substring(i + 2)) {
            console.log("No");
            break;
        }
        console.log("Yes");
        break;
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
