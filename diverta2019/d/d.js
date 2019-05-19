"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8");

const N = parseInt(input, 10);

if (N <= 2) {
  console.log(0);
  return;
}

let ans = 0;

for (let i = 1; i < N / i; i++) {
  if (N % i === 0) {
    ans += (N / i) - 1;
  }
}

console.log(ans);
