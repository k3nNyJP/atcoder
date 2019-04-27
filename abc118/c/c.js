"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

const A = input[1]
  .split(" ")
  .map(val => parseInt(val, 10))
  .sort((a, b) => a - b);

while (A[1]) {
  for (let i = 1; i < A.length; i++) {
    A[i] %= A[0];
  }
  A.sort((a, b) => a - b);

  A.splice(0, A.lastIndexOf(0) + 1);
}

console.log(A[0]);
