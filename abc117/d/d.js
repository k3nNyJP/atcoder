"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((x) => parseInt(x, 10));

const N = firstLine[0];
const K = firstLine[1];
const A = input[1].split(" ").map((x) => parseInt(x, 10));

let ans = A.reduce((pre, cur) => pre + cur);

for (let x = 1; x <= K; x++) {
  let fx = 0;
  for (let i = 0; i < N; i++) {
    fx += x ^ A[i];
  }

  if (fx > ans) { ans = fx; }
}

console.log(ans);
