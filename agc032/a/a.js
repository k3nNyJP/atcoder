"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);
const B = input[1].split(" ").map((val) => parseInt(val, 10));

function insert(ary, number) {
  ary.splice(number - 1, 0, number);
}

const ans = [];

for (let i = 0; i < N; i++) {
  if (B[i] > i + 1) {
    console.log("-1");
    return;
  }

  insert(ans, B[i]);
}

ans.forEach((val) => console.log(val));
