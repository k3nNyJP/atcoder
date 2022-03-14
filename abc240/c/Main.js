function searchCombination(items, target) {
    if (target === 0 || items.indexOf(target) !== -1) {
        return true;
    }
    else if (items.every((item) => item > target)) {
        return false;
    }
    const searched = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (searched[item]) {
            continue;
        }
        searched[item] = true;
        if (searchCombination([
            ...items.slice(0, i).filter((value) => value <= target - item),
            ...items.slice(i + 1).filter((value) => value <= target - item),
        ], target - item)) {
            return true;
        }
    }
    return false;
}
function Main(input) {
    const firstLine = input[0].split(" ").map((value) => parseInt(value, 10));
    const N = firstLine[0];
    const X = firstLine[1];
    let shortest = 0;
    const diffs = [];
    for (let i = 1; i <= N; i++) {
        const jump = input[i].split(" ").map((value) => parseInt(value, 10));
        shortest += jump[0];
        const diff = jump[1] - jump[0];
        diffs.splice(diffs.findIndex((value) => value > diff), 0, diff);
    }
    console.log(diffs);
    return;
    if (shortest > X) {
        console.log("No");
        return;
    }
    const shortage = X - shortest;
    console.log(searchCombination(diffs.filter((value) => value <= shortage), shortage)
        ? "Yes"
        : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
