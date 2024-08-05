function findPath(i: number, j: number, psf: string, h: number, w: number) {

    if (i > h || j > w) return;
    if (i == h && j == w) {
        console.log(psf);
        return
    }
    findPath(i, j + 1, psf + "h", h, w)//path is walk for horzinataly
    findPath(i + 1, j, psf + "v", h, w)// path walk for vartically
}

findPath(1, 1, " ", 3, 3)