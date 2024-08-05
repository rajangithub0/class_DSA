function staar(n) {
    for (var i = n; i >= 1; i--) {
        var star = i;
        var space = n - star;
        var s = " ";
        for (var k = 1; k <= space; k++) {
            s += " ";
        }
        for (var j = 1; j <= star; j++) {
            s += "*";
        }
        console.log(s);
    }
}
staar(5);
