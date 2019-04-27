"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);
const K = parseInt(input[2], 10);

let count = 0;

for (let i = 100; i > 0; i--) {
  if (A % i === 0 && B % i === 0) { count++; }
  if (count === K) {
    console.log(i);
    return;
  }
}
