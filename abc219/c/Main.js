function Main(input) {
    const X = input[0];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const N = parseInt(input[1], 10);
    const nameList = input.slice(2, 2 + N);
    const translatedNameList = nameList
        .map((name) => name
        .split("")
        .map((char) => alphabet[X.indexOf(char)])
        .join(""))
        .sort();
    console.log(translatedNameList
        .map((translatedName) => translatedName
        .split("")
        .map((char) => X[alphabet.indexOf(char)])
        .join(""))
        .join("\n"));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
