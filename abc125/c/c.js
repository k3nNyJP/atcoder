"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const A = input[1].split(" ").map((val) => parseInt(val, 10));

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

if (N === 2) {
  console.log(Math.max(A[0], A[1]));
  return;
}

let sumFromL = [];
let sumFromR = [];

sumFromL[0] = A[0];
for (let i = 1; i < N; i++) {
  sumFromL[i] = gcd(sumFromL[i - 1], A[i]);
}

sumFromR[N - 1] = A[N - 1];
for (let i = N - 2; i >= 0; i--) {
  sumFromR[i] = gcd(sumFromR[i + 1], A[i]);
}

let gcds = [];
for (let i = 0; i < N; i++) {
  gcds[i] = gcd(sumFromL[i - 1] || 0, sumFromR[i + 1] || 0);
}

console.log(Math.max(...gcds));
