"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));

const N = firstLine[0];
const M = firstLine[1];

const heightList = input[1].split(" ").map((val) => parseInt(val, 10));
const goodPlaceList = Array(N).fill(true);

for (let i = 2; i < M + 2; i++) {
  const path = input[i].split(" ").map((val) => parseInt(val, 10));

  if (heightList[path[0] - 1] <= heightList[path[1] - 1]) {
    goodPlaceList[path[0] - 1] = false;
  }

  if (heightList[path[1] - 1] <= heightList[path[0] - 1]) {
    goodPlaceList[path[1] - 1] = false;
  }
}

console.log(goodPlaceList.filter((isGood) => isGood === true).length);
