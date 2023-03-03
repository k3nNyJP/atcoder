function Main(input) {
    const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
    const followList = {};
    for (let i = 1; i <= Q; i++) {
        const [query, ai, bi] = input[i]
            .split(" ")
            .map((value) => parseInt(value, 10));
        if (!followList[ai]) {
            followList[ai] = {};
        }
        if (!followList[bi]) {
            followList[bi] = {};
        }
        switch (query) {
            case 1:
                followList[ai][bi] = true;
                break;
            case 2:
                followList[ai][bi] = false;
                break;
            case 3:
                console.log(followList[ai][bi] && followList[bi][ai] ? "Yes" : "No");
                break;
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
