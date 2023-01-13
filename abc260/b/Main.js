function Main(input) {
    const [N, X, Y, Z] = input[0].split(" ").map((value) => parseInt(value, 10));
    const Ai = input[1].split(" ").map((value) => parseInt(value, 10));
    const Bi = input[2].split(" ").map((value) => parseInt(value, 10));
    const resultList = [];
    const passedList = [];
    for (let i = 0; i < N; i++) {
        const index = i + 1;
        const math = Ai[i];
        const english = Bi[i];
        resultList.push({
            index,
            math,
            english,
        });
    }
    if (X > 0) {
        resultList.sort((a, b) => b.math - a.math || a.index - b.index);
        for (let i = 0; i < X; i++) {
            passedList.push(resultList.shift());
        }
    }
    if (Y > 0) {
        resultList.sort((a, b) => b.english - a.english || a.index - b.index);
        for (let i = 0; i < Y; i++) {
            passedList.push(resultList.shift());
        }
    }
    if (Z > 0) {
        resultList.sort((a, b) => b.math + b.english - (a.math + a.english) || a.index - b.index);
        for (let i = 0; i < Z; i++) {
            passedList.push(resultList.shift());
        }
    }
    passedList.sort((a, b) => a.index - b.index);
    console.log(passedList.map((passed) => passed.index).join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
