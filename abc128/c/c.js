"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ").map((v) => parseInt(v, 10));
const N = firstLine[0];
const M = firstLine[1];

const P = input[M + 1].split(" ").map((v) => parseInt(v, 10));

const lines = [];

for (let i = 1; i <= M; i++) {
  lines.push(input[i].split(" ").map((v) => parseInt(v, 10)));
}

function search(switches) {
  if (switches.length === N) {
    for (let i = 0; i < M; i++) {
      const line = lines[i];
      let on = 0;

      for (let j = 1; j <= line[0]; j++) {
        if (switches[line[j] - 1]) { on++; }
      }

      if (on % 2 !== P[i]) { return 0; }
    }

    return 1;
  }

  return search([...switches, 0]) + search([...switches, 1]);
}

console.log(search([]));
