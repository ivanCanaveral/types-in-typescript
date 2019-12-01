# types in typescript

## non-nullable types

By default, null and undefined can be assigned to any type. To prevent this behaviour, use the `strictNullChecks` option. This can be set in the `tsconfig.json`:

```json
{
    "compilerOptions": {
        "rootDir": "src",
        "outDir": "dist",
        "strictNullChecks": true
    }
}
```

Since this moment, we must be explicit about null or undefined:

```typescript
let text: string | undefined | null;
text = null;
```

## parametrized types

A function can be typed used parametrized or generic types:

```typescript
function mySumReduce<T>(myArray: T[], acc: T): T {
    ...
}
```

## type predicate

We can use *type predicate* to check types and give the compiler more info about the type of our variables since this comparison.

```typescript
function isNumber(element: string | number): element is number {
    ...
}
```

## readonly

We can prevent properties from being modified using the modifier `readonly`.

When working with classes, a read-only property can be modified only inside the `constructor` method.

```typescript
class superPet {
    readonly color: string;
    name: string;

    constructor(color: string, name: string){
        this.color = color;
        this.name = name;
    }
}
```

:exclamation: There are some read-only types, like `ReadOnlyArray<T>`, that gives you a non-mutable array that expose non-destructive methods only.

## never and void

The type of a function that never ends is `void`. However the type of a variable that is assigned in an unrecheable piece of code is `never`.

In the following example, the type of `unreachableVar` will be inferred as `never`:
```typescript
const unreachableVar = function() {
    while(true) {
        ...
    }
};
```
(!) `function()` is the same as *arrow functions* `()=>{}`

However, in this example, `unreachableVar` will be typed as `void`:
```typescript
function endless() {
    while(true) {
        ...
    }
};

const unreachableVar = endless();
```

`void` type is the type of functions that not returns anything:
```typescript
function hi(): void {
    console.log('hi!');
}
```

## enumerate types

In typescript we can also define new enumerate types:

```typescript
enum FuzzyPet {
    dog,
    cat,
    hamster
};
```

### tip: using `never` type in switch statements

In this case, if out patterns are non exhaustive, the compiler will throw an error:

```typescript
enum FuzzyPet {
    dog,
    cat,
    hamster
};

function assertNever(anyValue: never) {
    throw Error(`Ups! You forgot a case: '${anyValue}'`);
};

function talk(myPet: FuzzyPet) {
    switch (myPet) {
        case FuzzyPet.dog: return "Guau!";
        case FuzzyPet.cat: return "Miau!";
        case FuzzyPet.hamster: return "sss!";
        default: return assertNever(myPet);
    }
};
```

## type overload

Look at this function:

```typescript
function duplicate<T>(element: T | string): T[] | string{
    if (typeof element === 'string') {
        return element + element;
    }
    return [element, element]
};
```

It takes a `string` or a generic type `T`, and returns a `string` or an array of type `T`. This means that, if I give it a `string`, the compiler won't asume that the result will be a `string`. The compiler is going to expect something of type `string` or `T`. To fix this, we can use the **overload** feature of typescript as follows:

```typescript
function duplicate(element: string): string;
function duplicate<T>(element: T): T[];
function duplicate<T>(element: T | string): T[] | string {
    if (typeof element === 'string') {
        return element + element;
    }
    return [element, element]
};
```

This way, if we use a `string` as input, the compiler will expect a `string` as output.

## string and numeric enums

We can create enums with string members:

```typescript
enum myEndpoints = {
    Endpoint1 = "localhost:3000",
    Endpoint2 = "localhost:3001"
}
```

An now we can reference the enum type, and get the string value:

```typescript
console.log(myEndpoints.EndPont1);

>>> localhost:3000
```
The same for numbers

```typescript
enum numbers = {
    BIGNUMBER = 999999,
    ZERO = 0
}
```

:exclamation: We can define ours `enums` as constants. Constants enums are directly turns in a simple substitution when the code is transpiled. This way we can get lighter code. In fact, there is an option in the tsconfig to always build `enum`s as `const`:

```json
{
    "compilerOptions": {
        ...
        "preserveConstEnums": true
    }
}
```

## literal types

### string literal types

```typescript
let movement: "up" | "down" | "left" | "right" = "up";
movement = "down"; // Ok ;)
movement = "other-thing" // compile error
```