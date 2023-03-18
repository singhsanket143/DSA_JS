const Product = function (n, p) {
    this.name = n;
    this.price = p;
}

const p = new Product("iphone", 100000);
console.log(p);