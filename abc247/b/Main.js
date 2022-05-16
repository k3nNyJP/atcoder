function Main(input) {
    const N = parseInt(input[0], 10);
    const nicknameList = [];
    for (let i = 1; i <= N; i++) {
        let fullname = input[i].split(" ");
        for (let j = 1; j < i; j++) {
            const othersNames = input[j].split(" ");
            fullname = fullname.filter((name) => {
                const duprecate = othersNames.find((others) => others === name);
                if (duprecate) {
                    nicknameList[j - 1] = nicknameList[j - 1].filter((nickname) => nickname !== duprecate);
                }
                return !duprecate;
            });
            if (fullname.length === 0 || nicknameList[j - 1].length === 0) {
                console.log("No");
                return;
            }
        }
        nicknameList.push(fullname);
        console.log(nicknameList);
    }
    console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
