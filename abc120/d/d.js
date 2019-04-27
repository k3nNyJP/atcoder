"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((val) => parseInt(val), 10));

const N = input[0][0];
const M = input[0][1];

const ans = [];
let lands = [];
let indexes = [];

for (let i = 0; i < N; i++) {
  lands[i] = [i + 1];
  indexes[i + 1] = i;
}

let combination = (N * (N - 1)) / 2;
ans[M] = combination;

for (let i = M; i > 0; i--) {
  const start = input[i][0];
  const goal = input[i][1];
  const startIndex = indexes[start];
  const goalIndex = indexes[goal];

  if (startIndex === goalIndex) {
    ans[i - 1] = combination;
    continue;
  }

  combination -= lands[startIndex].length * lands[goalIndex].length;
  ans[i - 1] = combination;

  const concatLand = lands[startIndex].concat(lands[goalIndex]);

  lands[startIndex] = concatLand;
  lands[goalIndex] = [];
  indexes = indexes.map((val) => val === goalIndex ? startIndex : val);
}

for (let i = 1; i <= M; i++) {
  console.log(ans[i]);
}
