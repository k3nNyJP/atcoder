"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const S = input[1];

const list = {};

for (let i = 0; i < N; i++) {
  const char = S.charAt(i);
  list[char] = list[char] ? list[char] + 1 : 1;
}

let ans = 1;

Object.keys(list).forEach((key) => {
  ans *= list[key] + 1;
  ans %= Math.pow(10, 9) + 7;
});

console.log(ans - 1);
