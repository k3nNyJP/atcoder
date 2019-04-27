"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstline = input[0].split(" ").map(val => parseInt(val, 10));
const A = firstline[0];
const B = firstline[1];
const Q = firstline[2];

const tail = { pos: 0, type: "Tail" };

for (let i = 0; i < A + B; i++) {
  const pos = {
    pos: parseInt(input[i + 1], 10),
    type: i < A ? "Shrine" : "Temple",
  };

  let cur = tail;

  while (cur.prev) {
    if (cur.pos < pos.pos) { break; }
  }

  cur.prev = pos;
  pos.next = cur;
}

let cur = tail;

while (cur) {
  console.log(cur);
  cur = cur.prev;
}
