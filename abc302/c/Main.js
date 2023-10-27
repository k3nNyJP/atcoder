function calcDistance(s1, s2) {
    return s1
        .split("")
        .reduce((distance, char, index) => (s2[index] === char ? distance : distance + 1), 0);
}
function search(current, remains) {
    for (let i = 0; i < remains.length; i++) {
        if (calcDistance(current, remains[i]) !== 1) {
            continue;
        }
        const next = remains[i];
        const nextRemains = [...remains.slice(0, i), ...remains.slice(i + 1)];
        if (nextRemains.length === 0) {
            return true;
        }
        else if (search(next, nextRemains)) {
            return true;
        }
    }
    return false;
}
function Main(input) {
    const [N, M] = input[0].split(" ").map((value) => parseInt(value, 10));
    const S = input.slice(1, N + 1);
    for (let i = 0; i < N; i++) {
        if (search(S[i], [...S.slice(0, i), ...S.slice(i + 1)])) {
            console.log("Yes");
            return;
        }
    }
    console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
