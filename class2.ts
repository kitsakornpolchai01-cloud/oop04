class Car {
    brand: string;
    model: string;
    type: string;
    door: number;
    engine: number;
    price: number;

    constructor(b: string, m: string, t: string, d: number, e: number, p: number) {
        this.brand = b;
        this.model = m;
        this.type = t;
        this.door = d;
        this.engine = e;
        this.price = p;
    }

    show(): void {
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Type: ${this.type}, Door: ${this.door}, Engine: ${this.engine} cc, Price: ${this.price} บาท`);
    }

    chgengine(newengine: number): void {
        this.engine = newengine;
        console.log(this.brand, this.model, "engine change to:", this.engine);
    }
}

const car1 = new Car("Toyota", "Camry", "Sedan", 4, 2000, 14050000);
const car2 = new Car("Isuzu", "MU-X", "SUV", 5, 3000, 13050000);

car1.show();
car2.show();