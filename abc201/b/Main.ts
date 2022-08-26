function Main(input: string[]) {
  const N = parseInt(input[0], 10);

  const records = [
    { name: "", height: 0 },
    { name: "", height: 0 },
  ];

  for (let i = 1; i <= N; i++) {
    const [name, heightStr] = input[i].split(" ");
    const height = parseInt(heightStr);

    if (records[0].height < height) {
      records.unshift({ name, height });
    } else if (records[1].height < height) {
      records[1] = { name: name, height };
    }
  }

  console.log(records[1].name);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
