"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const A = firstLine[1];
const B = firstLine[2];
const C = firstLine[3];

const stock = {
  A,
  B,
  C,
};

const commandList = [];
const swappableList = [];

for (let i = 1; i <= N; i++) {
  const first = input[i][0];
  const second = input[i][1];

  if (stock[first] === 0 && stock[second] === 0) {
    if (swappableList.length <= 0) {
      console.log("No");
      return;
    }

    const swappingTurn = swappableList.pop();
    stock[swappingTurn.first] -= 2;
    stock[swappingTurn.second] += 2;
    commandList[swappingTurn.turn] = swappingTurn.second;
  }

  if (stock[first] > stock[second]) {
    stock[first]--;
    stock[second]++;
    commandList.push(second);
  } else {
    if (stock[first] === stock[second]) {
      swappableList.push({ turn: commandList.length, first, second });
    }

    stock[second]--;
    stock[first]++;
    commandList.push(first);
  }
}

console.log("Yes");
for (let i = 0; i < commandList.length; i++) {
  console.log(commandList[i]);
}
