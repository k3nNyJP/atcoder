"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8");

const date = new Date(input);
const now = new Date("2019/04/30");

console.log(date > now ? "TBD" : "Heisei");
