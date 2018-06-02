'use strict';

class Context {
    constructor(state) {
        console.log("Context Class created");
        switch (state) {
            case "A":
                this.state = new ConcreteStateA()
                break
            case "B":
                this.state = new ConcreteStateB()
                break
            default:
                this.state = new ConcreteStateA()
        }
    }

    request() {
        console.log('Context.request invoked');
        this.state.handle(this);
    }
}

class State {
    constructor() {
        console.log("State Class created");
    }

    handle() {
        console.log('State.handle invoked');
    }
}

class ConcreteStateA extends State {
    constructor() {
        super();
        console.log("ConcreteStateA Class created");
    }

    handle(context) {
        console.log('ConcreteStateA.handle invoked');
    }
}

class ConcreteStateB extends State {
    constructor() {
        super();
        console.log("ConcreteStateB Class created");
    }

    handle(context) {
        console.log('ConcreteStateB.handle invoked');
    }
}

let context = new Context("A")
context.request()