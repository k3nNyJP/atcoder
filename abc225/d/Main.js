function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const Q = firstLine[1];
    const trains = Array(N)
        .fill(1)
        .map((_, index) => [index + 1]);
    console.log(trains);
    for (let i = 1; i <= Q; i++) {
        const query = input[i].split(" ");
        switch (query[0]) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
