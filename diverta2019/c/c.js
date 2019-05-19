"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

let startWithB = 0;
let endWithA = 0;
let startWithBandEndWithA = 0;
let ans = 0;

for (let i = 1; i <= N; i++) {
  const s = input[i];
  let foundA = false;
  let firstIsB = false;
  let lastIsA = false;

  for (let j = 0; j < s.length; j++) {
    if (s[j] === 'A') {
      foundA = true;
      if (j === (s.length - 1)) {
        lastIsA = true;
      }
    } else if (s[j] === 'B') {
      if (foundA) {
        ans++;
        foundA = false;
      } else if (j === 0) {
        firstIsB = true;
      }
    } else {
      foundA = false;
    }
  }

  if (firstIsB && lastIsA) {
    startWithBandEndWithA++;
  } else if (firstIsB) {
    startWithB++;
  } else if (lastIsA) {
    endWithA++;
  }
}

const diff = Math.abs(startWithB - endWithA);

ans += Math.min(startWithB, endWithA);

if (startWithBandEndWithA) {
  ans += startWithBandEndWithA - 1;
  if (startWithB || endWithA) { ans++; }
}

console.log(ans);
