"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const cards = input[1]
  .split(" ")
  .slice(0, N)
  .map(x => parseInt(x, 10));

const sorted = cards.sort((a, b) => b - a);

const ans = sorted.reduce((pre, cur, index) => (index % 2) ? pre - cur : pre + cur, 0);

console.log(ans);
