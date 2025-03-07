function Main(input) {
    const Q = parseInt(input[0], 10);
    const queue = [0];
    for (let i = 1, removed = 0, r = 0; i <= Q; i++) {
        const query = input[i].split(" ");
        switch (query[0]) {
            case "1":
                queue.push(parseInt(query[1], 10) + queue[queue.length - 1]);
                break;
            case "2":
                removed++;
                break;
            case "3":
                const target = parseInt(query[1], 10) - 1;
                console.log(queue[target + removed] - queue[removed]);
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
