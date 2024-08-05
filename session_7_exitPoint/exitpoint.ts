function FindExitPoint(arr) {
    // Code here
    let i = 0;
    let j = 0;
    let dir = "R";

    while (i >= 0 && i < arr.length && j >= 0 && j > arr[0].length) {
        if (arr[i][j] == 1) {
            arr[i][j] = 0;
            //change driection
            if (dir == "R") dir = "D";
            else if (dir == "D") dir = "L";
            else if (dir == "L") dir = "U";
            else if (dir == "U") dir = "R";
        } else {
            if (dir == "R") j++;
            else if (dir == "D") i++;
            else if (dir == "L") j--;
            else if (dir == "U") i--;
        }
    }
    if (dir == "R") j--;
    else if (dir == "D") i--;
    else if (dir == "L") j++;
    else if (dir == "u") i++;
    return [i, j];
}
