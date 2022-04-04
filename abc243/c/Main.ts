interface Person {
  position: number[];
  direction: string;
}

function Main(input: string[]) {
  const N = parseInt(input[0], 10);
  const S = input[N + 1];

  // Y座標を基準に、進行方向別に1組ずつ記録する
  const personList: Person[][] = [];

  for (let i = 1; i <= N; i++) {
    const person: Person = {
      position: input[i].split(" ").map((value) => parseInt(value, 10)),
      direction: S[i - 1],
    };

    if (!personList[person.position[1]]) {
      personList[person.position[1]] = [];
    }

    const otherPerson = personList[person.position[1]][person.direction === "L" ? 1 : 0];

    if (person.direction === "L") {
      if (person.position[0] > otherPerson.position[0]) {
        console.log("Yes");
        return;
      }
    } else {
      if (person.position[0] < otherPerson.position[0]) {
        console.log("Yes");
        return;
      }
    }

    const pivotPerson = personList[person.position[1]][person.direction === "L" ? 0 : 1];
    if (person.direction === "L") {

    }
    personList[person.position[1]].push(person);
  }

  console.log("No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
