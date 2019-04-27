"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8");

const N = parseInt(input, 10);

for (let target = N; target <= (N * (N - 1)) / 2; target++) {
  const rest = new Array(N).fill(target);


  for (let i = 0; i < N; i++) {
    let ans = [];




    let isAns = true;

    for (let i = 0; i < N; i++) {
      if (rest[i] !== 0) {
        isAns = false;
        break;
      }
    }

    if (isAns) {
      console.log(ans.length);
      for (let i = 0; i < ans.length; i++) {
        console.log(ans[i]);
      }
      return;
    }
  }
}
