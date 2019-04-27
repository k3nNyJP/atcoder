"use strict";

function groundGarden(heights) {
  // console.log(`loop: heights=${heights}`);
  let lowestHeight = heights[0];
  let lowestIndexes = [0];

  if (!heights.length) { return 0; }

  for (let i = 1; i < flowerNum; i++) {
    const height = heights[i];
    if (height < lowestHeight) {
      lowestHeight = height;
      lowestIndexes = [i];
    } else if (height === lowestHeight) {
      lowestIndexes.push(i);
    } else {
      // ignore
    }
  }
  // console.log(`lowestIndexes=${lowestIndexes}, lowestHeight=${lowestHeight}`);

  if (lowestIndexes.length === flowerNum) {
    // console.log(`return: ${lowestHeight}`);
    return lowestHeight;
  } else {
    const nextHeights = heights.map((x) => x - lowestHeight);
    const water = lowestHeight;

    let sum = 0;
    let subHeights = [];

    for (let i = 0; i < nextHeights.length; i++) {
      if (nextHeights[i] === 0) {
        if (subHeights.length) {
          sum += groundGarden(subHeights);
          subHeights = [];
        }
        continue;
      }

      subHeights.push(nextHeights[i]);
    }

    if (subHeights.length) {
      sum += groundGarden(subHeights);
    }

    return water + sum;
  }
}

const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const flowerNum = parseInt(input[0], 10);
const heights = input[1].split(" ").map((x) => parseInt(x));

const ans = groundGarden(heights.slice(0, flowerNum));

console.log(ans);
