function Main(input) {
    const [N, D, P] = input[0].split(" ").map((value) => parseInt(value, 10));
    const fees = input[1]
        .split(" ")
        .map((value) => parseInt(value, 10))
        .sort((a, b) => b - a);
    let ans = 0;
    for (let i = 0; i < N; i += D) {
        let sumOfFeesInDDays = 0;
        for (let day = 0; day < D && i + day < N; day++) {
            sumOfFeesInDDays += fees[i + day];
        }
        ans += P < sumOfFeesInDDays ? P : sumOfFeesInDDays;
    }
    // while (fees.length > 0) {
    //   const feeOfDDays = fees.splice(0, D);
    //   const sumOfFees = feeOfDDays.reduce((sum, fee) => sum + fee);
    //   ans += P < sumOfFees ? P : sumOfFees;
    // }
    console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
