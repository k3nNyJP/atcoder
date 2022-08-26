"use strict";
// import std = require('tstl')
Object.defineProperty(exports, "__esModule", { value: true });
let outs = [];
const str = require("fs").readFileSync("/dev/stdin", "utf8");
const [N, M] = str.trim().split(" ").map(Number);
function finderRecruisive(tmpVal, result) {
    if (result.length === N) {
        console.log(result.join(" "));
        return;
    }
    result.push(tmpVal);
    for (let j = tmpVal + 1; j <= M; j++) {
        finderRecruisive(j, result);
    }
}
const main = () => {
    for (let i = 1; i <= M; i++) {
        finderRecruisive(i, []);
    }
};
main();
exports.default = {};
