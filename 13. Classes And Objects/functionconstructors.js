function Product(n, p) {
    this.name = n;
    this.price = p;
    return {x: 10, y: 20}
}

const p = new Product("iphone 14", 100000); 
console.log(p);

/**
 * 1. -> this is js is diff than other languages
 * 2. -> this keyword refers to the context from where we call the function -> is not applicable to arrow functions
 */

/**
 * if you dont return anything, js returns the newly created obj
 * if youj return primitive, then also we get newly created object
 * if you return custom obj, then js will return this custom obj not the newly created obj
 */