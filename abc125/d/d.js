"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const A = input[1].split(" ").map((val) => parseInt(val, 10));

let ans = 0;
let minuses = 0;

for (let i = 0; i < N; i++) {
  if (A[i] < 0) {
    minuses++;
    ans -= A[i];
  } else {
    ans += A[i];
  }
}


if (minuses % 2 === 1) {
  const minus = A.sort((a, b) => Math.abs(a) - Math.abs(b))[0];

  ans -= Math.abs(minus) * 2;
}

console.log(ans);
