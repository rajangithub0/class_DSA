function first(arr, tar) {
    var ans = -1;
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            ans = mid;
            r = mid - 1;
        }
        else if (arr[mid] < tar) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return ans;
}
var arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 5];
var tar = 2;
var ide = first(arr, tar);
console.log(ide);
