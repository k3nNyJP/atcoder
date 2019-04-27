"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const Q = firstLine[1];

const S = input[1];

let left = 0;
let right = N - 1;

for (let i = Q + 1; i > 1; i--) {
  const t = input[i].charAt(0);
  const d = input[i].charAt(2);

  if (S.charAt(left - 1) === t && d === "R") {
    left--;
  } else if (S.charAt(left) === t && d === "L") {
    left++;
  }

  if (S.charAt(right) === t && d === "R") {
    right--;
  } else if (S.charAt(right + 1) === t && d === "L") {
    right++;
  }

  if (left > right) {
    break;
  }
}

console.log(right - left + 1);
