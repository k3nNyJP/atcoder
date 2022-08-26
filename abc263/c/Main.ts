// import std = require('tstl')

type Print = void | string | number | string[] | number[];
let outs: Print[] = [];

const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
const [N, M] = str.trim().split(" ").map(Number);

function finderRecruisive(tmpVal: number, result: number[]) {
  if (result.length === N) {
    console.log(result.join(" "));
    return;
  }

  result.push(tmpVal);

  for (let j = tmpVal + 1; j <= M; j++) {
    finderRecruisive(j, result);
  }
}

const main = (): Print => {
  for (let i = 1; i <= M; i++) {
    finderRecruisive(i, []);
  }
};

main();
export default {};
