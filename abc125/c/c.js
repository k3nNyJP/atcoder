"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const A = input[1].split(" ").map((val) => parseInt(val, 10));

let min = [0, 0];

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

if (N === 2) {
  console.log(Math.max(A[0], A[1]));
  return;
}

const zeroOne = (gcd(A[0], A[1]));
const zeroTwo = (gcd(A[0], A[2]));
const oneTwo = (gcd(A[1], A[2]));

if (N === 3) {
  console.log(Math.max(zeroOne, zeroTwo, oneTwo));
  return;
}

min = [zeroOne, zeroTwo, oneTwo];
min.sort((a, b) => b - a);

for (let i = 4; i < N; i++) {
  const v = (gcd(min[0], A[i]));

  if (v < min[1]) {
    min[0] = min[1];
    min[1] = v;
  } else if (v < min[0]) {
    min[0] = v;
  }
}

console.log(min[0]);
