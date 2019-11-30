function dropNumbers(maybeStrings: (number | string)[]): string[] {
    const onlyStrings: string[] = [];
    for (const element of maybeStrings) {
        if (typeof element === "string") {
            // here the type of element is 'string'
            onlyStrings.push(element);
        } else {
            // and here the type of element is 'number'
            console.log(element, 'dropped.');
        }
    }
    return onlyStrings;
}

const dirtyDocyment: (number | string)[] = [0, 'one', 'two', 3, 'four'];
console.log(dropNumbers(dirtyDocyment));
