function binary(arr, target) {
    var n = arr.length;
    var l = 0;
    var r = n - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 456, 789];
var target = 60;
var id = binary(arr, target);
console.log(id);
