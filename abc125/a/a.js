"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);
const T = parseInt(input[2], 10);

let ans = 0;

for (let t = A; t < T + 0.5; t += A) {
  ans += B;
}

console.log(ans);
