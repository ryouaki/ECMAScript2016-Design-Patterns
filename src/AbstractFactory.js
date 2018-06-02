'use strict';

class AbstractFactory {
    constructor() {
        console.log("AbstractFactory class created");
    }

    createProductA(product) {
        console.log("AbstractFactory.createProductA created");
    }

    createProductB(product) {
        console.log("AbstractFactory.createProductB created");
    }
}

class ConcreteFactory1 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory1 class created");
    }

    createProductA(product) {
        console.log('ConcreteFactory1 createProductA');
        return new ProductA1();
    }

    createProductB(product) {
        console.log('ConcreteFactory1 createProductB');
        return new ProductB1();
    }
}

class ConcreteFactory2 extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory2 class created");
    }

    createProductA(product) {
        console.log('ConcreteFactory2 createProductA');
        return new ProductA2();
    }

    createProductB(product) {
        console.log('ConcreteFactory2 createProductB');
        return new ProductB2();
    }
}

class AbstractProductA {
    constructor() {
        console.log('AbstractProductA class created');
    }
}

class AbstractProductB {
    constructor() {
        console.log('AbstractProductB class created');
    }
}

class ProductA1 extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA1 class created');
    }
}

class ProductA2 extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA2 class created');
    }
}

class ProductB1 extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB1 class created');
    }
}

class ProductB2 extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB2 class created');
    }
}

var factory1 = new ConcreteFactory1();
var productB1 = factory1.createProductB();
var productA1 = factory1.createProductA();

var factory2 = new ConcreteFactory2();
var productA2 = factory2.createProductA();
var productB2 = factory2.createProductB();