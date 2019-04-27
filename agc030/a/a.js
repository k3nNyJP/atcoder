"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);
const C = parseInt(input[2], 10);

console.log(C <= A + B + 1 ? B + C : A + (B * 2) + 1);
