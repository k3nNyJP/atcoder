// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n")
  tmp0 = input[0].split(" ")
  N = Number(tmp0[0])

  A = input[1].split(" ")
  for (var i = 0; i < N; i++) {
    A[i] = Number(A[i])
  }

  console.log(A);

  var zero_cnt = 0
  while (zero_cnt != N) {
    zero_cnt = 0
    var min = Math.min(...A)
    for (var i = 0; i < N; i++) {
      var mod = A[i] % min
      if (mod !== 0) {
        A[i] = mod
      } else {
        A[i] = min
        zero_cnt++
      }
    }

    console.log(A);
  }

  console.log(Math.min(...A))
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main("4\n5 13 8 1000000000")
