"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const T = parseInt(input[0], 10);
const X = parseInt(input[1], 10);

console.log(T/X);
