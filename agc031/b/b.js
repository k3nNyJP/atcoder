"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

let prev = "";
const list = {};
let ans = 1;

for (let i = 1; i <= N; i++) {
  const color = input[i];

  if (color === prev) { continue; }

  if (!list[color]) {
    list[color] = [ans];
  }
  else {
    let sum = 0;
    list[color].forEach((val) => {
      sum += val;
    });
    ans += sum;
    list[color].push(ans);
  }

  prev = color;
  console.log(color, list, ans);
}

console.log(ans);
