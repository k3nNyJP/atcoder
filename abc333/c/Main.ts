function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  // 333通りなら全探索できる
  // 3つの数 (1, 1, 1) = (left, middle, right) の和が小さい順に一つずつ探索
  // 右側から見ていって、「自分よりひとつ左の数になるまで1を加算し、自分より右の数を1にリセット」ができる箇所を探す
  // 加算できなくなったとき、一番左の数をひとつ増やす
  let index = 1;
  for (let l = 1; ; l++) {
    for (let m = 1; m <= l; m++) {
      for (let r = 1; r <= m; r++, index++) {
        if (index === N) {
          // l, m, r それぞれは「1が並ぶ数」を表すので、相当するレビュニット数に変換して計算
          console.log(
            Number("1".repeat(l)) +
              Number("1".repeat(m)) +
              Number("1".repeat(r))
          );
          return;
        }
      }
    }
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
