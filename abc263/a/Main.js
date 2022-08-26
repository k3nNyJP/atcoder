function Main(input) {
    const dictionary = {};
    input[0].split(" ").forEach((value) => {
        dictionary[value] = dictionary[value] ? dictionary[value] + 1 : 1;
    });
    console.log(Object.values(dictionary).every((value) => value === 2 || value === 3)
        ? "Yes"
        : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
