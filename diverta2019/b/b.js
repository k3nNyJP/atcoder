"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const R = parseInt(input[0], 10);
const G = parseInt(input[1], 10);
const B = parseInt(input[2], 10);
const N = parseInt(input[3], 10);

let ans = 0;

for (let r = 0; r <= N / R; r++) {
  for (let g = 0; g <= (N - (r * R)) / G; g++) {
    const rest = N - (r * R + g * G);
    if (rest % B === 0) {
      ans++;
    }
  }
}

console.log(ans);
