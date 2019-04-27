"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8").trim();

let ans = 0;
let len = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "A" || input[i] === "T" || input[i] === "C" || input[i] === "G") {
    len++;
  } else {
    if (len > ans) { ans = len; }
    len = 0;
  }
}

console.log(len > ans ? len : ans);
