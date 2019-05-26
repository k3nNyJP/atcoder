"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

let stores = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  stores.push({
    number: i,
    city: line[0],
    point: parseInt(line[1], 10),
  });
}

stores.sort((a, b) => {
  if (a.city !== b.city) {
    return a.city < b.city ? -1 : 1;
  } else {
    return b.point - a.point;
  }
});

for (let i = 0; i < N; i++) {
  console.log(stores[i].number);
}
