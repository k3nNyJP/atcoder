using System;
class Program
{
	static void Main(string[] args)
	{
		string[] firstLine = Console.ReadLine().Split(' ');
		string[] secondLine = Console.ReadLine().Split(' ');
        long N = long.Parse(firstLine[0]);
        long K = long.Parse(firstLine[1]);

        long[] A = new long[N];

        for (long i = 0; i < N; i++) {
            A[i] = long.Parse(secondLine[i]);
        }

        long ans = 0;

        for (long x = 0; x <= K; x++) {
            long fx = 0;
            for (long i = 0; i < N; i++) {
                fx += x ^ A[i];
            }

            if (fx > ans) { ans = fx; }
        }

		//出力
		Console.WriteLine(ans);
	}
}
