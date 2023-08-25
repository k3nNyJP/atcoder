function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const icecreams: { flavor: number; deliciousness: number }[] = [];

  for (let i = 1; i <= N; i++) {
    const nextIce = input[i].split(" ").map((value) => parseInt(value, 10));

    const deliciousnessRank = icecreams.findIndex(
      (icecream) => nextIce[1] > icecream.deliciousness
    );

    if (deliciousnessRank === -1) {
      icecreams.push({ flavor: nextIce[0], deliciousness: nextIce[1] });
    } else {
      icecreams.splice(deliciousnessRank, 0, {
        flavor: nextIce[0],
        deliciousness: nextIce[1],
      });
    }
  }

  if (icecreams[0].flavor !== icecreams[1].flavor) {
    console.log(icecreams[0].deliciousness + icecreams[1].deliciousness);
    return;
  }

  let ans = icecreams[0].deliciousness + icecreams[1].deliciousness / 2;
  for (let i = 2; i < N; i++) {
    if (icecreams[i].flavor === icecreams[0].flavor) {
      continue;
    }

    const deliciousness =
      icecreams[i].deliciousness + icecreams[0].deliciousness;

    if (deliciousness > ans) {
      ans = deliciousness;
    }
    break;
  }

  console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
