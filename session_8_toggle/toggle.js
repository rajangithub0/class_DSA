function toggle(s) {
    var ans = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s.charCodeAt(i);
        if (ascii >= 97) {
            ascii -= 32;
        }
        else {
            ascii += 32;
        }
        var char = String.fromCharCode(ascii);
        ans += char;
    }
    return ans;
}
console.log(toggle("aBcDeFgH"));
