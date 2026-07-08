class Animal {
    species: string;
    sound: string;

    constructor(s: string, t: string) {
        this.species = s;
        this.sound = t;
    }

    makeSound(): void {
        console.log(`The ${this.species} says ${this.sound}`);
    }
}

let animal1 = new Animal("Dog", "Bark");
let animal2 = new Animal("Cat", "Meow");

animal1.makeSound();
animal2.makeSound();