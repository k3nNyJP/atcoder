"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = (inputList) => {
    const N = parseInt(inputList[0], 10);
    const sList = inputList[1].split(" ").map((v) => parseInt(v, 10));
    const tList = inputList[2].split(" ").map((v) => parseInt(v, 10));
    const minT = Math.min(...tList);
    const startIndex = tList.indexOf(minT);
    const answerList = new Array(N).fill(0);
    answerList[startIndex] = minT;
    for (let i = 1; i < N; i++) {
        const checkIndex = (startIndex + i) % N;
        const prevIndex = checkIndex - 1 < 0 ? N - 1 : checkIndex - 1;
        const sTime = answerList[prevIndex] + sList[prevIndex];
        const tTime = tList[checkIndex];
        answerList[checkIndex] = Math.min(sTime, tTime);
    }
    answerList.map((answer) => console.log(answer));
};
exports.Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));
