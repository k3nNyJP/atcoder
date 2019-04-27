"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const secondLine = input[1].split(" ");

const a = parseInt(input[0], 10);
const b = parseInt(secondLine[0], 10);
const c = parseInt(secondLine[1], 10);
const str = input[2];

console.log(`${a + b + c} ${str}`);
