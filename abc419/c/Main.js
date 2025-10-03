function Main(input) {
    const N = parseInt(input[0], 10);
    const [R1, C1] = input[1].split(" ").map((value) => parseInt(value, 10));
    let rangeR = { min: R1, max: R1 };
    let rangeC = { min: C1, max: C1 };
    for (let i = 2; i <= N; i++) {
        const [R, C] = input[i].split(" ").map((value) => parseInt(value, 10));
        rangeR.min = R < rangeR.min ? R : rangeR.min;
        rangeR.max = R > rangeR.max ? R : rangeR.max;
        rangeC.min = C < rangeC.min ? C : rangeC.min;
        rangeC.max = C > rangeC.max ? C : rangeC.max;
    }
    console.log(rangeR, rangeC);
    console.log(Math.ceil(Math.max(rangeR.max - rangeR.min, rangeC.max - rangeC.min) / 2));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
