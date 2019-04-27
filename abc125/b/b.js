"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const V = input[1].split(" ").map((val) => parseInt(val, 10));
const C = input[2].split(" ").map((val) => parseInt(val, 10));

let ans = 0;

for (let i = 0; i < N; i++) {
  if (V[i] > C[i]) {
    ans += V[i] - C[i];
  }
}

console.log(ans);
