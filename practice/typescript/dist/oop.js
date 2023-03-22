class Product {
    constructor(name, id, exp, quan) {
        this.name = name;
        this.id = id;
        this.exp = exp;
        this.quan = quan;
    }
}
class Shampoo extends Product {
    constructor(name, id, exp, price, quan) {
        super(name, id, exp, quan);
        this.price = price;
    }
    display() {
        console.log(`Product Name: ${this.name}, Status: ${this.status()},  Price:${this.price} , Quantity: ${this.quan} , Cart Value : ${this.cartval("dove", "dove")}`);
    }
    available() {
        if (this.name === "Dove") {
            return true;
        }
        return false;
    }
    status() {
        if (this.available()) {
            return `Available `;
        }
        return ` Not Available`;
    }
    cartval(item1, item2, item3) {
        if (item1 && item2 && item3) {
            return this.price * 3;
        }
        else if (item1 && item2) {
            return this.price * 2;
        }
        else {
            return this.price;
        }
    }
}
class MemberShampoo extends Shampoo {
    constructor() {
        super(...arguments);
        this.discount = 50;
    }
    display() {
        console.log(`Product Name: ${this.name}, Status: ${this.status()}, Discounted Price:${this.price - this.discount} Quantitiy:${this.quan}  Cart Value : ${this.cartval("dove")}`);
    }
}
const guest = new Shampoo("Dove", 1213, "12/10/2025", 249, 2);
guest.display();
const user = new MemberShampoo("Dove", "1213", "2025", 249, 1);
user.display();
export {};
//# sourceMappingURL=oop.js.map