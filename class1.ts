class Computer {
    brand: string;
    price: number;
    cpu: string;
    ram: number;

    constructor(b: string, p: number, c: string, r: number) {
        this.brand = b;
        this.price = p;
        this.cpu = c;
        this.ram = r;
    }

    show(): void {
        console.log(`Computer Brand: ${this.brand}, CPU: ${this.cpu}, RAM: ${this.ram} GB, Price: ${this.price}`);
    }
}

const computer1 = new Computer("Dell", 24500, "Intel", 64);
computer1.show();

const computer2 = new Computer("HP", 18000, "AMD", 32);
computer2.show();