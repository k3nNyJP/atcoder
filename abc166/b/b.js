"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const K = firstLine[1];

const sunukeList = Array(N).fill(false);

for (let i = 1; i <= K; i++) {
  const d = parseInt(input[2 * i - 1], 10);
  const targetLine = input[2 * i].split(" ");

  for (let j = 0; j < d; j++) {
    sunukeList[targetLine[j] - 1] = true;
  }
}

console.log(sunukeList.filter((hasSnack) => hasSnack === false).length);
