function maxEle(arr: number[]) {
    let maxi: number = -Infinity;
    let idx: number = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
            idx = i;
        }
    }
    console.log(maxi, idx);
}

maxEle([6, 4, 5, 6, 7, 4, 17, 8, 9])