function pattern4(n) {
    var starCount = 1;
    var spaceCount = Math.floor(n / 2);
    for (var i = 1; i <= n; i++) {
        // print this line
        var s = "";
        for (var j = 1; j <= spaceCount; j++)
            s += " ";
        for (var j = 1; j <= starCount; j++)
            s += "*";
        console.log(s); // this line has been printed
        if (i < n / 2) {
            //first half
            starCount += 2;
            spaceCount -= 1;
        }
        else {
            //second half
            starCount -= 2;
            spaceCount += 1;
        }
    }
}
pattern4(21);
