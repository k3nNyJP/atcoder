function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const addIndexCountMap = A.reduce((map, value, index) => {
        const addIndex = value + (index + 1);
        map.set(addIndex, (map.get(addIndex) ?? 0) + 1);
        return map;
    }, new Map());
    const answer = A.reduce((count, value, index) => {
        const subIndex = value - (index + 1);
        count += addIndexCountMap.get(-subIndex) ?? 0;
        return count;
    }, 0);
    console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
