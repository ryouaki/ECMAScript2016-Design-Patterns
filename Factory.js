'use strict';

class Product {
    constructor() {
        console.log('Product created');
    }
}

class ConcreteProduct extends Product {
    constructor() {
        super();
        console.log('ConcreteProduct created');
    }
}

class Creator {
    constructor() {
        console.log('Creator created');
    }

    FactoryMethod() {
        console.log('Creator.FactoryMethod created');
    }

    AnOperation() {
        console.log('Creator.AnOperation created');
        this.product = this.FactoryMethod();
        console.log(this.product instanceof ConcreteProduct);
    }
}

class ConcreteCreator extends Creator {

    constructor() {
        super()
        console.log('ConcreteCreator created')
    }

    FactoryMethod() {
        return new ConcreteProduct();
    }
}

var factory = new ConcreteCreator()
factory.AnOperation()