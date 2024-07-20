function patt(n: number) {
    for (let i = n; i >= 1; i--) {
        let s: string = "";
        console.log(s);
        for (let j = 1; j <= i; j++) {
            s += '#'
        }
        console.log(s);

    }
}
patt(5)