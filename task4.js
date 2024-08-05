function task4(n) {
    var starCount = 1;
    var spaceCount = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        var s = "";
        for (var j = 1; j <= spaceCount; j++) {
            s += " ";
        }
        for (var j = 1; j <= starCount; j++) {
            s += "*";
        }
        console.log(s);
        if (i < n / 2) {
            starCount += 2;
            spaceCount -= 1;
        }
        else {
            starCount -= 2;
            spaceCount += 1;
        }
    }
}
task4(21);
