"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstline = input[0].split(" ").map(val => parseInt(val, 10));

const N = firstline[0];
let ABC = [firstline[1], firstline[2], firstline[3]];

const bamboos = [];
let costs = 0;

for (let i = 0; i < N; i++) {
  const value = parseInt(input[i + 1], 10);

  if (ABC.indexOf(value) !== -1) {
    ABC[ABC.indexOf(value)] = 0;
    continue;
  }

  bamboos.push(parseInt(input[i + 1], 10));
}

for (let i = 0; i < 3; i++) {
  const sort = bamboos.map((val, index) => { val: Math.abs(val - ABC[i]), index });
  console.log(sort);
}

console.log(bamboos, ABC);

console.log(costs);
