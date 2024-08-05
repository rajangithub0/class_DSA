function findceil(arr, target) {
    var ceil = -Infinity;
    var l = 0;
    var r = arr.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return arr[mid];
        }
        else if (arr[mid] > target) {
            r = mid - 1;
            ceil = arr[mid];
        }
        else {
            l = mid + 1;
        }
    }
    return ceil;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 456, 789];
var target = 75;
var index = findceil(arr, target);
console.log(index);
