"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

const pos = {
  t: 0,
  x: 0,
  y: 0,
};

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const next = {
    t: parseInt(line[0], 10),
    x: parseInt(line[1], 10),
    y: parseInt(line[2], 10),
  };

  const spent = next.t - pos.t;
  const distance = Math.abs(next.x - pos.x) + Math.abs(next.y - pos.y);

  const margin = spent - distance;
  if (margin < 0 || margin % 2) {
    console.log("No");
    return;
  }

  pos.t = next.t;
  pos.x = next.x;
  pos.y = next.y;
}

console.log("Yes");
return;
