class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(i: number, n: string, p: number, q: number) {
        this.id = i;
        this.name = n;
        this.price = p;
        this.quantity = q;
    }

    sell(amount: number): void {
        if (amount > this.quantity) {
            console.log(`Error: Not enough stock for ${this.name}`);
        } else {
            this.quantity = this.quantity - amount;
        }
    }

    restock(amount: number): void {
        this.quantity = (this.quantity + amount);
    }
}   //  ปิด class Product ตรงนี้ ก่อนเริ่ม Hero

class Hero {
    name: string;
    hp: number;
    inventery: Product[];

    constructor(n: string, h: number, i: Product[]) {
        this.name = n;
        this.hp = h;
        this.inventery = i;
    }

    addItem(item: Product): void {
        this.inventery.push(item);
    }

    useItem(itemname: string): void {
        for (let p of this.inventery) {
            if (p.name === itemname) {
                p.quantity = p.quantity - 1;
                console.log(`${this.name} used ${p.name}. Remaining: ${p.quantity}`);

                if (p.quantity === 0) {
                    this.inventery = this.inventery.filter(x => x.name !== itemname);
                }
            }
        }
    }
    takeDamage(damage: number):void{
       this.hp = this.hp - damage ;
       
       if (this.hp === 0){
        console.log(`Game Over : ${this.name} has fallen`)
       }
    }
}

function findLowStockItems(quantities: number[], threshold: number): number[] {
    let result: number[] = [];
    for (let q of quantities) {
        if (q < threshold) {
            result.push(q);
        }
    }
    return result;
}

console.log(findLowStockItems([20, 5, 12, 8, 30], 10));

const shrit1 = new Product(1, "T-Shirt", 200, 10);
shrit1.sell(3);
console.log(shrit1.quantity);

shrit1.sell(20);
shrit1.restock(5);
console.log(shrit1.quantity);

const potion = new Product(1, "Potion", 50, 3);
const johnn = new Hero("John", 100, []);

johnn.addItem(potion);

johnn.useItem("Potion");
johnn.useItem("Potion");
johnn.useItem("Potion");

johnn.takeDamage(30);
console.log(johnn.hp);      

johnn.takeDamage(70);
console.log(johnn.hp);       