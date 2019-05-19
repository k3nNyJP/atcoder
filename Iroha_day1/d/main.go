package main

import (
	"fmt"
	"sort"
)

func main() {
	var N, X, Y int

	fmt.Scanf("%d %d %d", &N, &X, &Y)

	A := make([]int, N)

	for i := 0; i < N; i++ {
		fmt.Scan(&A[i])
	}

	sort.Ints(A)

	for i := N - 1; i >= 0; i-- {
		if (N-1-i)%2 == 0 {
			X += A[i]
		} else {
			Y += A[i]
		}
	}

	switch {
	case X > Y:
		fmt.Println("Takahashi")
	case X < Y:
		fmt.Println("Aoki")
	default:
		fmt.Println("Draw")
	}
}
