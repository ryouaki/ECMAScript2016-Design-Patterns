'use strict';

class Abstraction {
    constructor() {
        console.log('Abstraction Class created');
    }

    Operation() {
        console.log('Abstraction.Operation invoked');
        this.imp.OperationImp();
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

    OperationImp() {
        console.log('Implementor.OperationImp invoked');
    }
}

class ConcreteImplementorA extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorA Class created');
    }

    OperationImp() {
        console.log('ConcreteImplementorA.OperationImp invoked');
    }
}

class ConcreteImplementorB extends Implementor {
    constructor() {
        super()
        console.log('ConcreteImplementorB Class created');
    }

    OperationImp() {
        console.log('ConcreteImplementorB.OperationImp invoked');
    }
}

var abstraction = new RefinedAbstraction();
abstraction.setImp(new ConcreteImplementorA());
abstraction.Operation();
abstraction.setImp(new ConcreteImplementorB());
abstraction.Operation();