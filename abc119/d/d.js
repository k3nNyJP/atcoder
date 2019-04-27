"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstline = input[0].split(" ").map(val => parseInt(val, 10));
const A = firstline[0];
const B = firstline[1];
const Q = firstline[2];

const shrines = [];
const temples = [];

for (let i = 0; i < A; i++) {
  shrines.push(parseInt(input[i + 1], 10));
}

for (let i = 0; i < B; i++) {
  temples.push(parseInt(input[i + A + 1], 10));
}

const distanceFromShrines = shrines.map((val) => ({
  dist: val,
  toTemple: Math.min(...temples.map((temp) => Math.abs(val - temp))),
}));
const distanceFromTemples = temples.map((val) => ({
  dist: val,
  toShrine: Math.min(...shrines.map((shrine) => Math.abs(val - shrine))),
}))

for (let i = 0; i < Q; i++) {
  const start = parseInt(input[i + A + B + 1], 10);

  let firstShrine;

  if (start < shrines[0]) { firstShrine = shrines[0] - start + distanceFromShrines[0].toTemple; }
  else if (start > shrines[A - 1]) { firstShrine = start - shrines[A - 1] + distanceFromShrines[A - 1].toTemple; }
  else {
    const rightShrine = shrines.findIndex((val) => start <= val);
    const rightFirst = shrines[rightShrine] - start + distanceFromShrines[rightShrine].toTemple;
    const leftFirst = start - shrines[rightShrine - 1] + distanceFromShrines[rightShrine - 1].toTemple;
    firstShrine = rightFirst > leftFirst ? leftFirst : rightFirst;
  }

  let firstTemple;

  if (start < temples[0]) { firstTemple = temples[0] - start + distanceFromTemples[0].toShrine; }
  else if (start > temples[B - 1]) { firstTemple = start - temples[B - 1] + distanceFromTemples[B - 1].toShrine; }
  else {
    const rightTemple = temples.findIndex((val) => start <= val);
    const rightFirst = temples[rightTemple] - start + distanceFromTemples[rightTemple].toShrine;
    const leftFirst = start - temples[rightTemple - 1] + distanceFromTemples[rightTemple - 1].toShrine;
    firstTemple = rightFirst > leftFirst ? leftFirst : rightFirst;
  }

  console.log(firstShrine > firstTemple ? firstTemple : firstShrine);
}


function nearestTemple(pos, temples) {

}
