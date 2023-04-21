function Main(input) {
    const [N, Q] = input[0].split(" ").map((value) => parseInt(value, 10));
    let nextCall = 1;
    let minCalled = 1;
    const consumed = Array(N + 1).fill(false);
    consumed[0] = true;
    const answer = [];
    for (let i = 1; i <= Q; i++) {
        const [query, numberStr] = input[i].split(" ");
        switch (query) {
            case "1":
                nextCall++;
                break;
            case "2":
                const number = parseInt(numberStr, 10);
                consumed[number] = true;
                for (let j = minCalled; j <= N; j++) {
                    if (!consumed[j]) {
                        minCalled = j;
                        break;
                    }
                }
                break;
            case "3":
                answer.push(minCalled);
                break;
        }
    }
    console.log(answer.join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
