"use strict";

// read lines from stdin
const input = parseInt(require("fs")
  .readFileSync("/dev/stdin", "utf8"), 10);

const first = Math.floor(input / 100);
const last = input % 100;

function canReadAsMonth(num) {
  return num > 0 && num < 13;
}

if (canReadAsMonth(first) && canReadAsMonth(last)) {
  console.log("AMBIGUOUS");
} else if (!canReadAsMonth(first) && canReadAsMonth(last)) {
  console.log("YYMM");
} else if (canReadAsMonth(first) && !canReadAsMonth(last)) {
  console.log("MMYY");
} else {
  console.log("NA");
}
