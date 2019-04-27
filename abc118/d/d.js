"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const firstLine = input[0].split(" ");

const N = parseInt(firstLine[0], 10);
const M = parseInt(firstLine[1], 10);

const needs = [2, 5, 5, 2 * 2, 5, 2 * 3, 3, 7, 6];
const numbers = [[], [], [1], [7], [4], [5, 3, 2], [9, 6], [8]];

const A = input[1]
  .split(" ")
  .map(val => parseInt(val, 10))
  // .sort((a, b) => needs[a] - needs[b]);

let rest = N;

const need7 = Math.floor(rest / 7);
rest = rest % 7;

const need5 = Math.floor(rest / 5);
rest = rest % 5;

const need3 = Math.floor(rest / 3);
rest = rest % 3;

const need2 = Math.floor(rest / 2);
rest = rest % 2;

console.log(need2, need3, need5, need7, rest % 7);
