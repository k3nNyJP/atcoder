function Main(input) {
    const N = parseInt(input[0], 10);
    const Amax = input[1].split(" ").reduce((max, valueStr) => {
        const value = parseInt(valueStr, 10);
        return value > max ? value : max;
    }, 0);
    const Bmin = input[2].split(" ").reduce((min, valueStr) => {
        const value = parseInt(valueStr, 10);
        return value < min ? value : min;
    }, 1000);
    console.log(Math.max(Bmin - Amax + 1, 0));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
