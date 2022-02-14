function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const A = input[1].split(" ").map((value) => parseInt(value, 10));

  const slice = [0];

  for (let i = 0, currentDegree = 0; i < N; i++) {
    currentDegree = (currentDegree + A[i]) % 360;
    slice.push(currentDegree);
  }

  console.log(
    slice
      .sort((a, b) => a - b)
      .reduce((result, slicedDegree, index, array) => {
        const previousSlicedDegree =
          array[index === 0 ? array.length - 1 : index - 1];
        const diff =
          slicedDegree - previousSlicedDegree > 0
            ? slicedDegree - previousSlicedDegree
            : slicedDegree + 360 - previousSlicedDegree;

        return Math.max(result, diff);
      }, 0)
  );
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
