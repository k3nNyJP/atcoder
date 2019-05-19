"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ").map((v) => parseInt(v, 10));

const N = input[0];
const K = input[1];

let borders = [];

if (K === 1) {
  console.log(1);
  return;
}

for (let i = 1; ; i++) {
  const border = K / Math.pow(2, i);
  borders.push(Math.ceil(border));

  if (border < 1) { break; }
}

let ans = (K < N) ? (N - K + 1) / N : 0;

for (let i = 0; i < borders.length; i++) {
  if (borders[i] > N) {
    borders[i] = N + 1;
    continue;
  }

  ans += ((borders[i - 1] || K) - borders[i]) / (N * Math.pow(2, i + 1));
}

console.log(ans);
