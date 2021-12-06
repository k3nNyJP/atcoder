function Main(input) {
    const first_args = [...input[0]];
    const second_args = [...input[1]];
    console.log(second_args);
    while (first_args.length && second_args.length) {
        if (parseInt(first_args.pop()) + parseInt(second_args.pop()) >= 10) {
            console.log("Hard");
            return;
        }
    }
    console.log("Easy");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split(" "));
