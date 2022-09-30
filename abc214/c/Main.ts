function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const S = input[1].split(" ").map((value) => parseInt(value, 10));
  const T = input[2].split(" ").map((value) => parseInt(value, 10));

  let updated = false;

  do {
    updated = false;

    for (let i = 0; i < N; i++) {
      const passedTime = T[i] + S[i];
      const nextSunukeIndex = (i + 1) % N;
      if (T[nextSunukeIndex] > passedTime) {
        T[nextSunukeIndex] = passedTime;
        updated = true;
      }
    }
  } while (updated);

  for (let i = 0; i < N; i++) {
    console.log(T[i]);
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
