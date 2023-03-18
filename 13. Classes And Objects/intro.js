class Product { // class is kind of like a template
    discount;
    #rating = 0;
    #name; // decalre the private memeber first befoore u use it
    description = "custom";
    constructor(n, p) {
        console.log("Calling the constructor");
        this.#name = n; // this keyword actually refers to the same empty object we created
        this.price = p; // data member
        // this.rating = 0;
    }

    static customMethod() {
        console.log("calling the custom static method");
    }

    getName() {
        console.log(this.#name);
    }

    setName(newName) {
        this.#name = newName;
    }

    get rate() {
        console.log(this.#rating);
    }

    set rate(r) {
        if(r < 0) return;
        this.#rating = r;
    }

    display() { // class methods are nothing but functions, they represent behaviour -> member functions
        console.log("Displaying a product", this.#name, this.price, this.#rating);
    }
}


const p = new Product("iphone 14", 100000); // new -> creates an empty plain object
console.log(p);
// p.name = "samsung s30"
// console.log(p.name);
// console.log(p)

p.getName();
p.setName("samsung s30")
p.getName()
p.display();

p.rate;
p.rate = 3;
p.display();
// const p1 = new Product();

// Product.customMethod();