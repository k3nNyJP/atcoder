function countHumidifyFloor(map, point, distance) {
    if (distance === 0) {
        return map[point.y][point.x] === "." ? 1 : 0;
    }
    let humidifiedCount = 0;
    for (let y = point.y - distance; y <= point.y + distance; y++) {
        if (y < 0 || y > map.length) {
            continue;
        }
        const remainDistance = distance - Math.abs(y - point.y);
        for (let x = point.x - remainDistance; x <= point.x + remainDistance; x++) {
            if (x < 0 || x > map[0].length) {
                continue;
            }
            humidifiedCount += map[y][x] === "." ? 1 : 0;
        }
    }
    return humidifiedCount;
}
function Main(input) {
    const [H, W, D] = input
        .shift()
        .split(" ")
        .map((value) => parseInt(value, 10));
    const map = input;
    console.log(countHumidifyFloor(map, { x: 4, y: 1 }, 1));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
