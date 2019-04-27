"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ");

const N = parseInt(input[0], 10);
const Y = parseInt(input[1], 10);

for (let x = 0; x <= N; x++) {
  for (let y = 0; x + y <= N; y++) {
    const z = N - (x + y);
    if (x * 10000 + y * 5000 + z * 1000 === Y) {
      console.log(`${x} ${y} ${z}`);
      return;
    }
  }
}

console.log("-1 -1 -1");
return;
