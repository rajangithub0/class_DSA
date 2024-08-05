function printAllNumbes(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            printes(arr, i, j);
        }
    }
}
function printes(arr, start, end) {
    var s = " ";
    for (var i = start; i <= end; i++) {
        s += arr[i] + ' ';
    }
    console.log(s);
}
printAllNumbes([10, 20, 30, 40]);
