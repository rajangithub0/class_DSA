function stringnum(s: string): string {
    let ans = ""
    ans += s[0];
    for (let i = 0; i + 1 < s.length; i++) {
        let asciiprev = s.charCodeAt(i);
        let asciinext = s.charCodeAt(i + 1);
        let diff = asciinext - asciiprev;
        ans += diff;
        ans += s[i + 1];
    }
    return ans;
}
let ans = stringnum("abcCDF")
console.log(ans);
