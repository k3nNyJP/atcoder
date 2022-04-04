function Main(input) {
    const N = parseInt(input[0], 10);
    const S = input[N + 1];
    // Y座標を基準に記録する
    const personList = [];
    for (let i = 1; i <= N; i++) {
        const person = {
            position: input[i].split(" ").map((value) => parseInt(value, 10)),
            direction: S[i - 1],
        };
        if (!personList[person.position[1]]) {
            personList[person.position[1]] = [];
        }
        if (person.direction === "L") {
            const collisionPersonIndex = personList[person.position[1]].findIndex((otherPerson) => {
                return (otherPerson.direction === "R" &&
                    person.position[0] > otherPerson.position[0]);
            });
            if (collisionPersonIndex !== -1) {
                console.log("Yes");
                return;
            }
        }
        else {
            const collisionPersonIndex = personList[person.position[1]].findIndex((otherPerson) => {
                return (otherPerson.direction === "L" &&
                    person.position[0] < otherPerson.position[0]);
            });
            if (collisionPersonIndex !== -1) {
                console.log("Yes");
                return;
            }
        }
        personList[person.position[1]].push(person);
    }
    console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
