function Main(input) {
    const N = parseInt(input[0], 10);
    const A = input[1].split(" ").map((value) => parseInt(value, 10));
    const numberList = Array(2000).fill(false);
    A.forEach((value) => {
        numberList[value] = true;
    });
    console.log(numberList.indexOf(false));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
