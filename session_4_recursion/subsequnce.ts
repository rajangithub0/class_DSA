function printAllSubSeq(idx: number, asf: string, arr: number[]): void {
    if (idx == arr.length) {
        console.log(asf);
        return;
    }
    //pick the array of idx
    printAllSubSeq(idx + 1, asf + arr[idx] + " ", arr);
    //not pick the idx
    printAllSubSeq(idx + 1, asf, arr)
}
let arr = [10, 20, 30]
printAllSubSeq(0, " ", arr)
