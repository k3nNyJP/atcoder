"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const Q = firstLine[1];

const S = input[1];
const golems = new Array(N).fill(1);

let vanish = 0;

for (let i = 2; i < Q + 2; i++) {
  const spell = input[i].split(" ");
  const t = spell[0];
  const d = spell[1];

  if (d === "L") {
    for (let j = 0; j < N; j++) {
      if (S.charAt(j) === t) {
        if (j === 0) { vanish += golems[j]; }
        else { golems[j - 1] += golems[j]; }
        golems[j] = 0;
      }
    }
  } else {
    for (let j = N - 1; j >= 0; j--) {
      if (S.charAt(j) === t) {
        if (j === N - 1) { vanish += golems[j]; }
        else { golems[j + 1] += golems[j]; }
        golems[j] = 0;
      }
    }
  }
}

console.log(N - vanish);
