
"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ").map((v) => parseInt(v, 10));

const N = input[0];
const K = input[1];

let ans = 0;

for (let i = 1; i <= N; i++) {
  let tmp = 1 / N;
  let now = i;

  while (now < K) {
    now *= 2;
    tmp /= 2;
  }

  ans += tmp;
}

console.log(ans);
