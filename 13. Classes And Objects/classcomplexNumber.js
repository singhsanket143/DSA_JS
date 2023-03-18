class ComplexNumber {
    #real;
    #imag;
    constructor(r, i) {
        this.#real = r;
        this.#imag = i;
    }
    get real() {
        return this.#real;
    }

    get imag() {
        return this.#imag;
    }

    addComplexNumber(c) {
        this.#real += c.real;
        this.#imag += c.imag;
    }

    display() {
        console.log(this.#real, " + i", this.#imag);
    }
}

const c1 = new ComplexNumber(5, 3);
const c2 = new ComplexNumber(1, 2);
c1.addComplexNumber(c2);
c1.display();