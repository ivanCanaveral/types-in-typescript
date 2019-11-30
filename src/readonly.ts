interface Pet {
    readonly color: string;
    name: string;
}

const myDog: Pet = {
    color: 'brown',
    name: 'nabogordo'
}

// this will lead us to a new transpile error
// myDog.color = 'pink';

class superPet {
    readonly color: string;
    name: string;

    constructor(color: string, name: string){
        this.color = color;
        this.name = name;
    }
}