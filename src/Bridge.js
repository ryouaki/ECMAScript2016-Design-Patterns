'use strict';

class Abstraction {
    constructor() {
        console.log('Abstraction Class created');
    }

    operation() {
        console.log('Abstraction.operation invoked');
        this.imp.operationImp();
    }
}

class RefinedAbstraction extends Abstraction {
    constructor() {
        super()
        console.log('RefinedAbstraction Class created');
    }

    setImp(imp) {
        console.log('RefinedAbstraction.setImp invoked');
        this.imp = imp
    }
}

class Implementor {
    constructor() {
        console.log('Implementor Class created');
    }

    operationImp() {
        console.log('Implementor.operationImp invoked');
    }
}

class ConcreteImplementorA extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorA Class created');
    }

    operationImp() {
        console.log('ConcreteImplementorA.operationImp invoked');
    }
}

class ConcreteImplementorB extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorB Class created');
    }

    operationImp() {
        console.log('ConcreteImplementorB.operationImp invoked');
    }
}

var abstraction = new RefinedAbstraction();
abstraction.setImp(new ConcreteImplementorA());
abstraction.operation();
abstraction.setImp(new ConcreteImplementorB());
abstraction.operation();