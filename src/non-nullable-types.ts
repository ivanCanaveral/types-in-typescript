function doubleMe(x: number | null | undefined): number {
    if (typeof x === "number") {
        return 2*x;
    } else {
        return 0;
    }
}

console.log(doubleMe(2));

function doubleMeRefactor(n: number | null | undefined): number {
    return typeof n === 'number'
        ? 2*n
        : 0
}

console.log(doubleMeRefactor(2));