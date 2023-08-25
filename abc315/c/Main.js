function Main(input) {
    const N = parseInt(input[0], 10);
    const icecreams = [];
    for (let i = 1; i <= N; i++) {
        const icecream = input[i].split(" ").map((value) => parseInt(value, 10));
        icecreams.push({ flavor: icecream[0], deliciousness: icecream[1] });
    }
    icecreams.sort((a, b) => b.deliciousness - a.deliciousness);
    if (icecreams[0].flavor !== icecreams[1].flavor) {
        console.log(icecreams[0].deliciousness + icecreams[1].deliciousness);
        return;
    }
    let ans = icecreams[0].deliciousness + icecreams[1].deliciousness / 2;
    for (let i = 2; i < N; i++) {
        if (icecreams[i].flavor === icecreams[0].flavor) {
            continue;
        }
        const deliciousness = icecreams[i].deliciousness + icecreams[0].deliciousness;
        if (deliciousness > ans) {
            ans = deliciousness;
        }
        break;
    }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
