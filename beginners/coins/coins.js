"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);
const X = parseInt(input[3]);

let ans = 0;
for (let a = 0; a <= A; a++) {
  for (let b = 0; b <= B; b++) {
    for (let c = 0; c <= C; c++) {
      if (a * 500 + b * 100 + c * 50 === X) {
        ans++;
      }
    }
  }
}

console.log(ans);
