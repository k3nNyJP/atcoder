"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

const roots = [];
const nodes = [];

function createNode(u, v, dist) {
  return {}
}

for (let i = 1; i < N; i++) {
  const line = input[i].split(" ").map((v) => parseInt(v, 10));

  const u = line[0];
  const v = line[1];
  const dist = line[2];

  if (!nodes[u] && !nodes[v]) {
    // new tree

    const nodeV = { index: v, color: (dist % 2) ? 1 : 0, childs: [] };
    const nodeU = { index: u, color: 0, childs: [nodeV] };

    roots.push(nodeU);
    nodes[u] = nodeU;
    nodes[v] = nodeV;
  } else if (nodes[u] && nodes[v]) {
    // concat trees
  } else {
    // add node to exist tree
    const node = nodes[u] || nodes[v];
    const newNodeIndex = nodes[u] ? v : u;

    function findNode(index, tree) {
      if (tree == undefined) { return null; }
      else if (tree.index === index) { return tree; }
      else {
        for (let j = 0; j < tree.childs.length; j++) {
          const node = findNode(index, tree.childs[j]);
          if (node) return node;
        }
      }
    }

    const newNode = {
      index: newNodeIndex,
      color: (dist % 2) ? (node.color + 1) % 2 : node.color,
      childs: [],
    }

    node.childs.push(newNode);
    nodes[newNodeIndex] = newNode;
  }
}

for (let i = 1; i < nodes.length; i++) {
  console.log(nodes[i].color);
}
