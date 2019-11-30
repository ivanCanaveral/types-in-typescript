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