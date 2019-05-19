package main

import (
	"fmt"
)

func main() {
	var s string
	var k int

	fmt.Scan(&s, &k)

	k %= len(s)

	fmt.Printf("%s%s\n", s[k:], s[:k])
}
