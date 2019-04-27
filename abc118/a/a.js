"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

console.log((b % a === 0) ? a + b : b - a);
