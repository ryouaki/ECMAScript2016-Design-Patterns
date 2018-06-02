'use strict';

class Visitor {
    constructor() {
        console.log('Visitor Class created!');
    }

    visitConcreteElementA(ConcreteElementA) {
        console.log('Visitor.visitConcreteElementA invoked');
    }

    visitConcreteElementB(ConcreteElementB) {
        console.log('Visitor.visitConcreteElementB invoked');
    }
}

class ConcreteVisitor1 extends Visitor {
    constructor() {
        super();
        console.log('ConcreteVisitor1 Class created!');
    }

    visitConcreteElementA(ConcreteElementA) {
        console.log('ConcreteVisitor1.visitConcreteElementA invoked');
    }

    visitConcreteElementB(ConcreteElementB) {
        console.log('ConcreteVisitor1.visitConcreteElementB invoked');
    }
}

class ConcreteVisitor2 extends Visitor {
    constructor() {
        super();
        console.log('ConcreteVisitor2 Class created!');
    }

    visitConcreteElementA(ConcreteElementA) {
        console.log('ConcreteVisitor2.visitConcreteElementA invoked');
    }

    visitConcreteElementB(ConcreteElementB) {
        console.log('ConcreteVisitor2.visitConcreteElementB invoked');
    }
}

class ObjectStructure {
    constructor() {
        console.log('ObjectStructure Class created!');
    }
}

class Element {
    constructor() {
        console.log('Element Class created!');
    }

    Accept(visitor) {
        console.log('Element.visitConcreteElementB invoked');
    }
}

class ConcreteElementA extends Element {
    constructor() {
        super();
        console.log('ConcreteElementA Class created!');
    }

    accept(visitor) {
        console.log('ConcreteElementA.accept invoked');
        visitor.visitConcreteElementA(this);
    }

    operationA() {
        console.log('ConcreteElementA.operationA invoked');
    }
}

class ConcreteElementB extends Element {
    constructor() {
        super();
        console.log('ConcreteElementB Class created!');
    }

    accept(visitor) {
        console.log('ConcreteElementB.accept invoked');
        visitor.visitConcreteElementB(this);
    }

    operationB() {
        console.log('ConcreteElementB.operationB invoked');
    }
}

let visitor1 = new ConcreteVisitor1();
let visitor2 = new ConcreteVisitor2();
let elementA = new ConcreteElementA();
let elementB = new ConcreteElementB();
elementA.accept(visitor1);
elementB.accept(visitor2);