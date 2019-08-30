"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n").map((val) => parseInt(val, 10));

const N = input[0];
const members = [, { childs: [] }];

for (let i = 1; i < N; i++) {
  const boss = input[i];
  members[i + 1] = { salary: 1, childs: [] };
  members[boss].childs.push(members[i + 1]);
}

console.log(calcSalary(members[1]));

function calcSalary(member) {
  if (member.childs.length === 0) {
    return 1;
  }

  let min = 0;
  let max = 0;

  member.childs.forEach((child) => {
    const salary = calcSalary(child);
    min = (min === 0 || salary < min) ? salary : min;
    max = salary > max ? salary : max;
  });

  return min + max + 1;
}
