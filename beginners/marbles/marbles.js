"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8");

let ans = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "1") { ans++; }
}

console.log(ans);
