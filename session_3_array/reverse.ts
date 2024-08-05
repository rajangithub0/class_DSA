function reverseArray(arr: number[]): number[] {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let rev = reverseArray(arr);
console.log(arr);
