"use strict";
// read lines from stdin
const input = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n");
const N = "0000" + input[0];
console.log(N.slice(-4));
