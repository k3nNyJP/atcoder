package main

import (
	"fmt"
)

func main() {
	var N int

	fmt.Scanf("%d", &N)

	for i := N-7; i <= N; i++ {
		fmt.Println(i)
	}
}
