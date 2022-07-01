function Main(input) {
    const CYCLE_HIT = ["H", "2B", "3B", "HR"];
    const hit = Array(4).fill(false);
    for (let i = 0; i < 4; i++) {
        hit[CYCLE_HIT.indexOf(input[i])] = true;
    }
    console.log(hit.every((base) => base));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
