function duplicate(element: string): string;
function duplicate<T>(element: T): T[];
function duplicate<T>(element: T | string): T[] | string {
    if (typeof element === 'string') {
        return element + element;
    }
    return [element, element]
};

const aNumber: number = 3;
console.log(duplicate(aNumber));

const aString: string = '3';
console.log(duplicate(aString));