"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const X = parseInt(input[0]);

let i = 0;
const resultStockList = [];

while (true) {
  const result = Math.pow(i, 5);
  resultStockList.push(result);

  for (let j = 0; j < resultStockList.length; j++) {
    if (
      result - resultStockList[j] === X ||
      resultStockList[j] - result === X
    ) {
      console.log(`${i} ${j}`);
      return;
    }

    if (result + resultStockList[j] === X) {
      console.log(`${i} ${-j}`);
      return;
    }
  }

  i++;
}
