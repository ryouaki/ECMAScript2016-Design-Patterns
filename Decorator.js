'use strict';

class Component {
    constructor() {
        console.log('Component Class created');
    }

    operation() {
        console.log('Component.operation invoked');
    }
}

class ConcreteComponent extends Component {
    constructor() {
        super();
        console.log('ConcreteComponent Class created');
    }

    operation() {
        console.log('ConcreteComponent.operation invoked');
    }
}

class Decorator extends Component {
    constructor(component) {
        super();
        this.component = component;
        console.log('Decorator Class created');
    }

    operation() {
        console.log('Decorator.operation invoked');
        this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {
    constructor(component, sign) {
        super(component);
        this.addedState = sign;
        console.log('ConcreteDecoratorA Class created');
    }

    operation() {
        super.operation();
        console.log('ConcreteDecoratorA.operation invoked');
        console.log(this.addedState)
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component, sign) {
        super(component);
        this.addedState = sign;
        console.log('ConcreteDecoratorB Class created');
    }

    operation() {
        super.operation();
        console.log('ConcreteDecoratorB.operation invoked');
        console.log(this.addedState + this.addedState + this.addedState + this.addedState + this.addedState);
    }

    addedBehavior() {
        this.operation();
        console.log('ConcreteDecoratorB.operation invoked');
    }
}

var component = new ConcreteComponent();
var decoratorA = new ConcreteDecoratorA(component, 'decoratorA');
var decoratorB = new ConcreteDecoratorB(component, 'decoratorB');
console.log('component: ');
component.operation();
console.log('decoratorA: ');
decoratorA.operation();
console.log('decoratorB: ');
decoratorB.addedBehavior();