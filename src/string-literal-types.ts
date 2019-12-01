let myString = "non-literal"; //inferred: string
const myLiteral = "literal"; //infered: string-literal

//literal types
let movement: "up" | "down" | "left" | "right" = "up";
movement = "down"; // Ok ;)
//movement = "other-thing" // compile error