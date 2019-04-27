"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

console.log((input[0] === input[1] && input[1] === input[2]) ? "Yes" : "No");
