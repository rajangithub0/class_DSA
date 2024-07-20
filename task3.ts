function staar(n: number): void {
    for (let i = n; i >= 1; i--) {
        let star: number = i;
        let space: number = n - star;
        let s: string = " ";
        for (let k = 1; k <= space; k++) {
            s += " ";
        }
        for (let j = 1; j <= star; j++) {
            s += "*";
        }
        console.log(s);
    }
}

staar(5);