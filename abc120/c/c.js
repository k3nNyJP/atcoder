"use strict";

// read lines from stdin
const S = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim();

let countZero = 0;
let countOne = 0;

for (let i = 0; i < S.length; i++) {
  if (S.charAt(i) === "0") {
    countZero++;
  } else {
    countOne++;
  }
}

console.log(Math.min(countZero, countOne) * 2);
