"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((v) => parseInt(v, 10));
const N = firstLine[0];
const K = firstLine[1];

const V = input[1].split(" ").map((v) => parseInt(v, 10));

let ans = 0;

function operate(turn, dequeue, inventory, hasNegative) {
  if (turn > K || dequeue.length === 0) { return; }

  let nextQueue, nextInv;
  let score = inventory.reduce((prev, curr) => prev + curr, 0);

  if (dequeue.length > 0) {
    // operation A
    let positiveGems = dequeue.findIndex((v) => v <= 0);

    let got = 0;
    for (let i = 0; i < positiveGems; i++) {
      got += dequeue[i];
    }

    nextQueue = dequeue.slice(positiveGems);



    if (score + got > ans) { ans = score + got; }

    operate(turn + 1, nextQueue, nextInv, hasNegative || got < 0);

    // operation B
    got = dequeue[dequeue.length - 1];
    nextQueue = dequeue.slice(0, -1);
    insertIndex = inventory.findIndex((v) => got > v);
    nextInv = insertIndex === -1 ? [...inventory, got] : [...inventory.slice(0, insertIndex), got, ...inventory.slice(insertIndex)];

    if (score + got > ans) { ans = score + got; }

    operate(turn + 1, nextQueue, nextInv, hasNegative || got < 0);
  }

  if (inventory.length > 0 && hasNegative) {
    // operation C
    let remove = inventory[inventory.length - 1];
    nextQueue = [remove, ...dequeue];
    nextInv = inventory.slice(0, -1);
    let stillHasNegative = nextInv[nextInv.length - 1] < 0;

    if (score - remove > ans) { ans = score - remove; }

    operate(turn + 1, nextQueue, nextInv, stillHasNegative);

    // operation D
    nextQueue = [...dequeue, remove];

    operate(turn + 1, nextQueue, nextInv, stillHasNegative);
  }
}

operate(1, V, [], false);

console.log(ans);
