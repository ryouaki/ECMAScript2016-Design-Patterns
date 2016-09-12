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

    factoryMethod() {
        console.log('Creator.factoryMethod created');
    }

    anOperation() {
        console.log('Creator.anOperation created');
        this.product = this.factoryMethod();
        console.log(this.product instanceof ConcreteProduct);
    }
}

class ConcreteCreator extends Creator {

    constructor() {
        super()
        console.log('ConcreteCreator created')
    }

    factoryMethod() {
        return new ConcreteProduct();
    }
}

var factory = new ConcreteCreator();
factory.anOperation();