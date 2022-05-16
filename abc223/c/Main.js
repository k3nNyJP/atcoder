function Main(input) {
    const N = parseInt(input.shift(), 10);
    let totalTime = 0;
    let distanceFromLeft = 0;
    const ropeList = input.map((line) => {
        if (line.trim() === "") {
            return;
        }
        const rope = line.split(" ").map((value) => parseInt(value, 10));
        const spendedTime = rope[0] / rope[1];
        totalTime += spendedTime;
        return { length: rope[0], speed: rope[1], time: spendedTime };
    });
    console.log(ropeList, totalTime);
    for (let i = 0, remainTime = totalTime / 2; remainTime > 0; i++) {
        const rope = ropeList[i];
        if (rope.time > remainTime) {
            distanceFromLeft += rope.speed * remainTime;
            break;
        }
        distanceFromLeft += rope.length;
        remainTime -= rope.time;
    }
    console.log(distanceFromLeft);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
