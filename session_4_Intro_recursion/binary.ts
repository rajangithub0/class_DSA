function binary(arr: number[], target: number): number {
    let n = arr.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 456, 789];
let target = 60;
let id = binary(arr, target);
console.log(id);
