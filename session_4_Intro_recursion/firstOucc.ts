function first(arr: number[], tar: number): number {
    let ans = -1;
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] == tar) {
            ans = mid;
            r = mid - 1;
        } else if (arr[mid] < tar) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

let arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 5, 5, 5, 5, 5]
let tar = 2;
let ide = first(arr, tar);
console.log(ide)
