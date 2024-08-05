function longest(arr) {
    var ans = "";
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[j].length == i)
                return ans;
            if (arr[0][i] != arr[j][i])
                return ans;
        }
        ans += arr[0][i];
    }
    return ans;
}
var res = longest(["monika", "moni", "monu"]);
console.log(res);
