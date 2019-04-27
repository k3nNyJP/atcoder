"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const lines = input[1].split(" ").map((x) => parseInt(x, 10)).sort((a, b) => b - a);

let longest = lines[0];

for (let i = 1; i < N; i++) {
  longest -= lines[i];
}

console.log(longest < 0 ? "Yes" : "No");
