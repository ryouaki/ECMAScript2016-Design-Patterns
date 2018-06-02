'use strict';

class AbstractClass {
    constructor() {
        console.log('AbstractClass Class created!');
    }

    templateMethod() {
        console.log('AbstractClass.templateMethod invoked');
        this.primitiveOperation1();
        this.primitiveOperation2();
    }

    primitiveOperation1() {
        console.log('AbstractClass.primitiveOperation1 invoked');
    }

    primitiveOperation2() {
        console.log('AbstractClass.primitiveOperation2 invoked');
    }
}

class ConcreteClass extends AbstractClass {
    constructor() {
        super();
        console.log('ConcreteClass Class created!');
    }

    primitiveOperation1() {
        console.log('ConcreteClass.primitiveOperation1 invoked');
    }

    primitiveOperation2() {
        console.log('ConcreteClass.primitiveOperation2 invoked');
    }
}

let obj = new ConcreteClass();
obj.templateMethod();