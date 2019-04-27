"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const S = input[1];

let R = 0;
let B = 0;

for (let i = 0; i < N; i++) {
  if (S.charAt(i) === "R") { R++; }
  else { B++; }
}

console.log(R > B ? "Yes" : "No");
