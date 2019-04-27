"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin", "utf8");

const firstLine = input.split(" ");
const a = parseInt(firstLine[0], 10);
const b = parseInt(firstLine[1], 10);

if (a % 2 && b % 2) {
  console.log("Odd");
} else {
  console.log("Even");
}
