"use strict";

function find(num, ary, l, r) {
  const p = Math.floor((r + l) / 2);

  if (r - l === 0) {
    if (ary[p] < num) {
      return p + 1;
    } else {
      return p;
    }
  } else if (r - l === 1) {
    if (num <= ary[l]) {
      return l;
    } else if (ary[l] < num && num <= ary[r]) {
      return r;
    } else if (ary[r] < num) {
      return r + 1;
    }
  }

  if (num < ary[p]) {
    return find(num, ary, l, p - 1);
  } else if (ary[p] < num) {
    return find(num, ary, p + 1, r);
  } else {
    return p;
  }
}

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));

const N = firstLine[0];
const Q = firstLine[1];

const S = input[1];

const indexes = [];

for (let i = 0; i < N; i++) {
  if (S[i] !== "A") {
    continue;
  }

  if (S[i + 1] === "C") {
    indexes.push(i);
  }
}

for (let i = 2; i < Q + 2; i++) {
  const line = input[i].split(" ").map((val) => parseInt(val, 10));
  const l = line[0] - 1;
  const r = line[1] - 1;

  let firstIndex = -1;
  let lastIndex = -1;

  firstIndex = find(l, indexes, 0, indexes.length);
  lastIndex = find(r, indexes, 0, indexes.length);

  // console.log(firstIndex, lastIndex);

  if (firstIndex === -1 || lastIndex === -1) {
    console.log(0);
  } else {
    console.log(lastIndex - firstIndex);
  }
}
