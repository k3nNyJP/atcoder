"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((x) => parseInt(x, 10));
const secondLine = input[1].split(" ").map((x) => parseInt(x, 10));

const N = firstLine[0];
const X = firstLine[1];

const points = secondLine.sort((a, b) => a - b);
const distances = points.map((val, index) => val - points[index - 1]).sort((a, b) => b - a);

let sum = 0;
for (let i = N; i < distances.length; i++) {
  sum += distances[i];
}

console.log(sum);
