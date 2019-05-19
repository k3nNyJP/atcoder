package main

import (
	"fmt"
	"sort"
)

func main() {
	var N, A, B int
	var D []int

	fmt.Scan(&N, &A, &B)

	D = make([]int, B+2)
	D[0] = 0
	D[B+1] = N + 1
	ans := 0

	for i := 0; i < B; i++ {
		fmt.Scan(&D[i+1])
	}

	sort.Ints(D)

	for i := 1; i < B+2; i++ {
		date := (D[i] - D[i-1] - 1) / A
		ans += D[i] - D[i-1] - 1 - date
	}

	fmt.Println(ans)
}
