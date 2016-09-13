'use strict';

class Context {
    constructor(type) {
        console.log('Context Class created!');
        switch (type) {
            case "A":
                this.strategy = new ConcreteStrategyA()
                break
            case "B":
                this.strategy = new ConcreteStrategyB()
                break
            default:
                this.strategy = new ConcreteStrategyA()
        }
    }

    contextInterface() {
        console.log('Context.contextInterface invoked');
        this.strategy.algorithmInterface()
    }
}

class Strategy {
    constructor() {
        console.log('Strategy Class created!');
    }

    algorithmInterface() {
        console.log('Strategy.algorithmInterface invoked');
    }
}

class ConcreteStrategyA extends Strategy {
    constructor() {
        super();
        console.log('ConcreteStrategyA Class created!');
    }

    algorithmInterface() {
        console.log('ConcreteStrategyA.algorithmInterface invoked');
    }
}

class ConcreteStrategyB extends Strategy {
    constructor() {
        super();
        console.log('ConcreteStrategyB Class created!');
    }

    algorithmInterface() {
        console.log('ConcreteStrategyB.algorithmInterface invoked');
    }
}

let contextA = new Context("A");
contextA.contextInterface();
let contextB = new Context("B");
contextB.contextInterface();