"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0]);
const numbers = input[1].split(" ").map((x) => parseInt(x, 10));

let ans = 0;

while (numbers.every((x) => x % 2 === 0)) {
  ans++;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] /= 2;
  }
}

console.log(ans);
