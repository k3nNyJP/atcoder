interface Point {
  x: number;
  y: number;
}

function distance(a: Point, b: Point) {
  const xDiff = Math.abs(a.x - b.x);
  const yDiff = Math.abs(a.y - b.y);
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const pointList: Point[] = [];

  for (let i = 1; i <= N; i++) {
    const point = input[i].split(" ").map((value) => parseInt(value, 10));
    pointList.push({ x: point[0], y: point[1] });
  }

  let maxDistance = 0;

  for (let i = 0; i < pointList.length - 1; i++) {
    for (let j = i + 1; j < pointList.length; j++) {
      const dist = distance(pointList[i], pointList[j]);

      maxDistance = dist > maxDistance ? dist : maxDistance;
    }
  }

  console.log(maxDistance);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
