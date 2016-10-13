'use strict';

class Product {
    constructor() {
        console.log('Product Class created');
    }
}

class ConcreteProduct extends Product {
    constructor() {
        super();
        console.log('ConcreteProduct Class created');
    }
}

class Creator {
    constructor() {
        console.log('Creator Class created');
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
        super();
        console.log('ConcreteCreator Class created');
    }

    factoryMethod() {
        return new ConcreteProduct();
    }
}

var factory = new ConcreteCreator();
factory.anOperation();
