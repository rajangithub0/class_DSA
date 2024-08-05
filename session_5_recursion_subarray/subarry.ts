function printAllNumbes(arr: number[]): void {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            printes(arr, i, j)
        }
    }
}

function printes(arr: number[], start: number, end: number): void {
    let s: string = " ";
    for (let i = start; i <= end; i++) {
        s += arr[i] + ' ';
    }
    console.log(s);
}

printAllNumbes([10, 20, 30, 40])