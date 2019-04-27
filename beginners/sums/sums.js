"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const N = parseInt(input[0]);
const A = parseInt(input[1]);
const B = parseInt(input[2]);

let ans = 0;

for (let n = 1; n <= N; n++) {
  let sum = 0;
  let num = n;
  do {
    sum += num % 10;
    num = parseInt(num / 10, 10);
  } while (num);

  if (sum >= A && sum <= B) {
    ans += n;
  }
}

console.log(ans);
