"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ");
const N = parseInt(firstLine[0], 10);
const M = parseInt(firstLine[1], 10);

const survay = [];

for (let i = 1; i <= N; i++) {
  const line = input[i].split(" ");
  const K = parseInt(line[0], 10);

  for (let j = 1; j <= K; j++) {
    const voted = parseInt(line[j], 10);
    survay[voted] = survay[voted] ? survay[voted]+1 : 1;
  }
}

let ans = 0;

for (let i = 1; i <= M; i++) {
  if (survay[i] === N) { ans++; }
}

console.log(ans);
