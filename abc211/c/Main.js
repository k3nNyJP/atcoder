const dictionary = {};
function Main(input) {
    const S = input[0].replace(/[^chokudai]/g, "");
    const TARGET = "chokudai";
    console.log(search(S, TARGET) % 1000000007);
}
function search(string, target) {
    if (dictionary[`${string}-${target}`]) {
        return dictionary[`${string}-${target}`];
    }
    if (target.length === 1) {
        const result = (string.match(new RegExp(target, "g")) || []).length;
        dictionary[`${string}-${target}`] = result;
        return result;
    }
    const result = string.split("").reduce((total, char, index) => {
        if (char !== target[0]) {
            return total;
        }
        return total + search(string.substring(index + 1), target.substring(1));
    }, 0);
    dictionary[`${string}-${target}`] = result;
    return result;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
