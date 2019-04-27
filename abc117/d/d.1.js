"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map(x => parseInt(x, 10));

const N = firstLine[0];
const K = firstLine[1];
const A = input[1].split(" ").map(x => parseInt(x, 10));

if (K === 0) {
  console.log(A.reduce((pre, cur) => pre + cur));
  return;
}

const bitLen = Math.ceil(Math.log2(K));

const xorZeros = [];
const xorOnes = [];

for (let i = 0; i <= bitLen; i++) {
  let x = Math.pow(2, i);

  let xorZero = A.reduce((pre, cur) => pre + (cur & x), 0);
  let xorOne = A.reduce((pre, cur) => pre + ((cur & x) ^ x), 0);

  xorZeros.push(xorZero);
  xorOnes.push(xorOne);
}

let ans = 0;
for (let i = 0; i <= K; i++) {
  let sum = 0;

  for (let b = 0; b <= bitLen; b++) {
    let x = Math.pow(2, b);
    if (i & x) { sum += xorOnes[b]; }
    else { sum += xorZeros[b]; }
  }

  if (sum > ans) { ans = sum; }
}

const mask = -1 ^ (Math.pow(2, bitLen + 1) -1);

const masked = A.reduce((pre, cur) => pre + (cur & mask), 0);
ans += masked;

console.log(ans);
