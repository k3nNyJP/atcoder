"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const regexp = /^(dream|dreamer|erase|eraser)*$/

console.log(regexp.test(input[0]) ? "YES" : "NO");
