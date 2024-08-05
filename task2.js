function patt(n) {
    for (var i = n; i >= 1; i--) {
        var s = "";
        console.log(s);
        for (var j = 1; j <= i; j++) {
            s += '#';
        }
        console.log(s);
    }
}
patt(5);
