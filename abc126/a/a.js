"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((v) => parseInt(v));

const N = firstLine[0];
const K = firstLine[1];
const S = input[1];

let ans = "";
for (let i = 0; i < N; i++) {
  ans += (K === i + 1) ? S.charAt(i).toLowerCase() : S.charAt(i);
}

console.log(ans);
