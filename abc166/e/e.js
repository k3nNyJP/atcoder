"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const N = parseInt(input[0], 10);

const heightList = input[1].split(" ").map((val) => parseInt(val, 10));
const heightHistogram = [];

for (let i = 0; i < N; i++) {
  if (heightHistogram[heightList[i]] !== undefined) {
    heightHistogram[heightList[i]].push(i + 1);
  } else {
    heightHistogram[heightList[i]] = [i + 1];
  }
}

const result = heightHistogram.reduce((sum, current, height) => {
  return (
    sum +
    current.reduce((matched, number) => {
      for (let i = number + 1; i < heightHistogram.length; i++) {
        console.log(number, i);
        if (heightHistogram[i] === undefined) {
          continue;
        }

        if (heightHistogram[i].indexOf(i - number)) {
          return matched + 1;
        }
      }

      return matched;
    }, 0)
  );
}, 0);

console.log(heightHistogram);
console.log(result);
