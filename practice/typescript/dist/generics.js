function func(val) {
    return val;
}
function getuser(val) {
    return val;
}
function getSearchElement(products) {
    return products[3];
}
const getElement = (products) => {
    return products[3];
};
const userDetails = (val1, val2) => {
    return {
        val1,
        val2
    };
};
console.log(userDetails("Not Permitted", { name: "Yash", id: 123 }));
class Products {
    constructor() {
        this.products = [];
    }
    addToCart(product) {
        this.products.push(product);
    }
    displayProducts() {
        console.log(this.products);
    }
}
const obj = new Products();
obj.addToCart("coke");
obj.addToCart(231);
obj.displayProducts();
export {};
//# sourceMappingURL=generics.js.map