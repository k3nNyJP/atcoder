class Stick {
  value: string = "";
  reverse: string = "";

  constructor(str: string) {
    for (let i = 0; i < str.length; i++) {
      this.value += str[i];
      this.reverse += str[str.length - 1 - i];
    }
  }

  isEqualTo(str: string): boolean {
    return str === this.value || str === this.reverse;
  }
}

function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const uniqueSticks: Map<string, Stick[]> = new Map();
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    const stickStr = input[i];

    const samePrefixSticks = uniqueSticks.get(stickStr.substring(0, 3));

    if (
      samePrefixSticks &&
      samePrefixSticks.some((uniqueStick) => uniqueStick.isEqualTo(stickStr))
    ) {
      continue;
    }

    const stick = new Stick(stickStr);
    uniqueSticks.set(stick.value.substring(0, 3), [
      ...(samePrefixSticks || []),
      stick,
    ]);
    uniqueSticks.set(stick.reverse.substring(0, 3), [
      ...(uniqueSticks.get(stick.reverse.substring(0, 3)) || []),
      stick,
    ]);
    answer++;
  }

  console.log(answer);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
