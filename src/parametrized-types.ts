function addDimension<T>(myArray: T[]): T[][] {
    const twoDimensionalArray: T[][] = [];
    for (const element of myArray) {
        twoDimensionalArray.push([element]);
    }
    return twoDimensionalArray;
}

const myArray: number[] = [1, 2, 3, 4];
console.log(addDimension(myArray));