'use strict';

class Builder {
    constructor() {
        console.log('Builder Class created!');
    }

    buildPart(partName) {
        console.log('Builder.buildPart invoked!');
    }
}

class ConcreteBuilder extends Builder {
    constructor() {
        super();
        console.log('ConcreteBuilder Class created!');
    }

    buildPart(partName) {
        super.buildPart(partName);
        console.log('ConcreteBuilder.buildPart invoked!');
        this.product = new Product(partName);
    }
    getResult() {
        console.log('ConcreteBuilder.getResult invoked!');
        return this.product;
    }
}

class Product {
    constructor(material) {
        console.log("Product class created");
        this.data = material
    }
}

class Director {
    constructor() {
        this.structure = ['Prod1', 'Prod2', 'Prod3'];
        console.log("Director class created");
    }

    construct() {
        console.log("Director.Construct created");
        for (var prodName in this.structure) {
            let builder = new ConcreteBuilder();
            builder.buildPart(this.structure[prodName]);
            builder.getResult();
        }
    }
}

let director = new Director();
director.construct();