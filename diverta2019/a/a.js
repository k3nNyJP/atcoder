"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const N = parseInt(input[0], 10);
const K = parseInt(input[1], 10);

console.log(N - K + 1);
