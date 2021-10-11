"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const result = input[0] === "ABC" ? "ARC" : "ABC";

console.log(result);
