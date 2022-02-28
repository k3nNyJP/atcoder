function Main(input) {
    const points = input[0].split(" ").map((value) => parseInt(value, 10));
    const a = { x: points[0], y: points[1] };
    const b = { x: points[2], y: points[3] };
    const possibilities = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
    ];
    for (let point of possibilities) {
        const p = { x: a.x + point[0], y: a.y + point[1] };
        const distanceFromB = (b.x - p.x) ** 2 + (b.y - p.y) ** 2;
        if (distanceFromB === 5) {
            console.log("Yes", a, b);
            return;
        }
    }
    console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
