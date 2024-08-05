function toggle(s: string): string {
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        if (ascii >= 97) {
            ascii -= 32;
        } else {
            ascii += 32;
        }
        let char = String.fromCharCode(ascii);
        ans += char;
    }
    return ans;
}

console.log(toggle("aBcDeFgH"));
