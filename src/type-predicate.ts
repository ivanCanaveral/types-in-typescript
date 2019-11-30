function isNumber(x: string | number): x is number {
    return typeof x === "number";
}