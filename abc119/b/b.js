"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

let sum = 0;

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const value = parseFloat(line[0], 10);
  const type = line[1];

  if (type === "JPY") { sum += value; }
  else { sum += (value * 380000.0); }
}

console.log(sum);
