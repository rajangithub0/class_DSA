function printer(n: number): void {
    if (n == 0) return;
    console.log(n);
    printer(n - 1);
    console.log(n)
}
printer(5);