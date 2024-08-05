function isPaldirom(s: string): boolean {
    let i = 0;
    let j = s.length - 1;
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


