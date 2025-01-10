function Main(input) {
    const [N, K] = input[0].split(" ").map((value) => parseInt(value, 10));
    const S = input[1];
    const blockRegExp = /1+/g;
    let block;
    const foundBlocks = [];
    while ((block = blockRegExp.exec(S)) !== null) {
        foundBlocks.push(block);
        console.log(block);
        if (foundBlocks.length >= K) {
            break;
        }
    }
    const prevBlock = foundBlocks[K - 2];
    const moveBlock = foundBlocks[K - 1];
    const answer = S.slice(0, prevBlock.index + prevBlock[0].length) +
        moveBlock[0] +
        S.slice(prevBlock.index + prevBlock[0].length, moveBlock.index) +
        S.slice(moveBlock.index + moveBlock[0].length);
    console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
