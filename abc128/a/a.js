"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const A = parseInt(input[0], 10);
const P = parseInt(input[1], 10);

const parts = (A * 3) + P;

console.log(Math.floor(parts / 2));
