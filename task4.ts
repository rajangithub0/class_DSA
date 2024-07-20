function task4(n: number) {
    let starCount = 1;
    let spaceCount = Math.floor(n / 2);

    for (let i = 1; i <= n; i++) {
        let s: string = "";
        for (let j = 1; j <= spaceCount; j++) {
            s += " ";
        }
        for (let j = 1; j <= starCount; j++) {
            s += "*";
        }
        console.log(s);

        if (i < n / 2) {
            starCount += 2;
            spaceCount -= 1;
        } else {
            starCount -= 2;
            spaceCount += 1;
        }
    }
}
task4(21);