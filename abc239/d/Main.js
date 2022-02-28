function Main(input) {
    const constraints = input[0].split(" ").map((value) => parseInt(value, 10));
    const A = constraints[0];
    const B = constraints[1];
    const C = constraints[2];
    const D = constraints[3];
    const primes = sieveOfEratosthenes(B + D);
    for (let i = A; i <= B; i++) {
        let findPrime = false;
        for (let j = C; j <= D; j++) {
            findPrime = primes.indexOf(i + j) !== -1;
            if (findPrime) {
                break;
            }
        }
        if (!findPrime) {
            console.log("Takahashi");
            return;
        }
    }
    console.log("Aoki");
    return;
}
function sieveOfEratosthenes(n) {
    var primes = [];
    for (let i = 0; i <= n; i++) {
        primes[i] = true;
    }
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; j * i <= n; j++) {
            primes[i * j] = false;
        }
    }
    var result = [];
    for (let i = 0; i < primes.length; i++) {
        if (primes[i])
            result.push(i);
    }
    return result;
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));
