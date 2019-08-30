"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ").map((val) => parseInt(val, 10));

const A = input[0];
const B = input[1];

const diff = Math.abs(B - A);

let ten;
let five;
let one;

if (diff % 10 > 7) {
  ten = Math.ceil(diff / 10);
  five = 0;
  one = 10 - (diff % 10);
} else {
  ten = Math.floor(diff / 10);
  five = diff % 10 > 3 ? 1 : 0;
  one = Math.abs(diff - (ten * 10) - (five * 5));
}

console.log(ten + five + one);
