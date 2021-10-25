"use strict";

// read lines from stdin
const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

const firstLine = input[0].split(" ").map((val) => parseInt(val, 10));
const N = firstLine[0];
const M = firstLine[1];

const rank = [];

for (let i = 1; i <= 2 * N; i++) {
  rank.push({ id: i, won: 0 });
}

for (let round = 0; round < M; round ++) {
  for (let match = 1; match <= N; match++) {
    const a = rank[2 * match - 2];
    const b = rank[2 * match - 1];

    const handA = input[a.id][round];
    const handB = input[b.id][round];

    if (handA === "G") {
      if (handB === "C") {
        a.won++;
      } else if (handB === "P") {
        b.won++;
      }
    } else if (handA === "C") {
      if (handB === "P") {
        a.won++;
      } else if (handB === "G") {
        b.won++;
      }
    } else if (handA === "P") {
      if (handB === "G") {
        a.won++;
      } else if (handB === "C") {
        b.won++;
      }
    }
  }

  rank.sort((a, b) => b.won - a.won || a.id - b.id);
}

rank.forEach((i) => console.log(i.id));
