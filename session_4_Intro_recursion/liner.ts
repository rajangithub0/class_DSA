
function linear(arr: number[], target: number) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 123, 456, 789];
let targets = 60;
let idx = binary(array, targets);
console.log(idx);