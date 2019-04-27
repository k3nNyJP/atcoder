"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const mochis = input.slice(1, N + 1).map((x) => parseInt(x, 10));

const ans = mochis.filter((val, index) => mochis.indexOf(val) === index).length;

console.log(ans);
