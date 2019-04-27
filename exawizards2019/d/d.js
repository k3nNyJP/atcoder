"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const X = firstLine[1];

const S = input[1].split(" ").map((val) => parseInt(val, 10));

function sumMod(X, ary) {
  let sum = 0;

  if (ary.length === 1) {
    return X % ary[0];
  }

  for (let i = 0; i < ary.length; i++) {
    const num = ary[i];
    const nextX = X % num;

    sum += sumMod(nextX, ary.slice(0, i).concat(ary.slice(i + 1, ary.length)));
  }

  return sum %= 1000000000 + 7;
}

console.log(sumMod(X, S));
