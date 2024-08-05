function pipe(n: number, s: string, d: string, h: string): void {
    if (n == 0) return;
    pipe(n - 1, s, h, d);
    console.log("move disc", n, "from", s, "to", d);
    pipe(n - 1, h, d, s);
}

pipe(5, 'A', 'B', 'C');