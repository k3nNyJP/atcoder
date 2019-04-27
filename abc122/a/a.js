"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8").trim();

if (input === "A") {
  console.log("T");
} else if (input === "T") {
  console.log("A");
} else if (input === "C") {
  console.log("G");
} else {
  console.log("C");
}
