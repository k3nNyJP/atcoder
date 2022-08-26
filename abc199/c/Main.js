function flip(S, N) {
    return S.substring(N) + S.substring(0, N);
}
function swap(S, A, B) {
    return (S.substring(0, A - 2) +
        S[B] +
        S.substring(A - 1, B - 2) +
        S[A] +
        S.substring(B - 1));
}
function Main(input) {
    const N = parseInt(input[0], 10);
    let S = input[1];
    const Q = parseInt(input[2], 10);
    for (let i = 0; i < Q; i++) {
        const [T, A, B] = input[3 + i]
            .split(" ")
            .map((value) => parseInt(value, 10));
        if (T === 1) {
            S = swap(S, A, B);
            console.log(S);
        }
        else {
            S = flip(S, N);
            console.log(S);
        }
    }
    console.log(S);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
