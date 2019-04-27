"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((val) => parseInt(val), 10));

const N = input[0][0];
const M = input[0][1];

const ans = [];

// Union-Find

class UnionFind {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i < n; i++) {
      this.parent[i] = -1;
    }
  }

  root(x) {
    if (this.parent[x] < 0) {
      return x;
    }
    return (this.parent[x] = this.root(this.parent[x]));
  }

  unite(x, y) {
    const rx = this.root(x);
    const ry = this.root(y);
    if (rx === ry) {
      return;
    }

    if (this.size(rx) >= this.size(ry)) {
      this.parent[rx] += this.parent[ry];
      this.parent[ry] = rx;
    } else {
      this.parent[ry] += this.parent[rx];
      this.parent[rx] = ry;
    }
  }

  isSame(x, y) {
    return this.root(x) === this.root(y);
  }

  size(x) {
    return -this.parent[this.root(x)];
  }
}

// end Union-Find

const union = new UnionFind(N);

ans[M] = (N * (N - 1)) / 2;

for (let i = M; i > 1; i--) {
  const x = input[i][0] - 1;
  const y = input[i][1] - 1;

  ans[i - 1] = ans[i];

  if (!union.isSame(x, y)) {
    ans[i - 1] -= union.size(x) * union.size(y);
    union.unite(x, y);
  }
}

for (let i = 1; i <= M; i++) {
  console.log(ans[i]);
}
