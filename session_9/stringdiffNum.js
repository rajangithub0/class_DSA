function stringnum(s) {
    var ans = "";
    ans += s[0];
    for (var i = 0; i + 1 < s.length; i++) {
        var asciiprev = s.charCodeAt(i);
        var asciinext = s.charCodeAt(i + 1);
        var diff = asciinext - asciiprev;
        ans += diff;
        ans += s[i + 1];
    }
    return ans;
}
var ans = stringnum("abcCDF");
console.log(ans);
