function isPaldirom(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(isPaldirom("rajan"));
console.log(isPaldirom('jaaj'));
console.log(isPaldirom('mom'));
