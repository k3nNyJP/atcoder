function Main(input) {
    const N = parseInt(input[0], 10);
    const Ai = input[1].split(" ");
    const amebaList = [0];
    for (let i = 0; i < N; i++) {
        const parent = parseInt(Ai[i], 10) - 1;
        const generation = amebaList[parent] + 1;
        amebaList.push(generation);
        amebaList.push(generation);
    }
    console.log(amebaList.join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
