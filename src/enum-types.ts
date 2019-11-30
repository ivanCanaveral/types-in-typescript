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