class House {
    constructor(
        public name: string,
        public bedroom: number,
        public bathroom: number,
        public area: number,
        public price: number
    ) {}

    showDetails(): void {
        console.log(`แบบบ้าน ${this.name} ${this.bedroom} ห้องนอน ${this.bathroom} ห้องน้ำ พื้นที่ ${this.area} ตารางเมตร ราคา ${this.price} บาท`);
    }

    chgprice(newprice: number): void {
        this.price = newprice;
        console.log("ราคาเปลี่ยนเป็น :", this.price, "บาท");
    }
}

const house1 = new House("กฤษกร", 4, 3, 150, 1500000);

house1.showDetails();