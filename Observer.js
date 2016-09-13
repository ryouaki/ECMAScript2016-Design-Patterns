'use strict';

class Subject {
    constructor() {
        console.log('Subject Class created');
    }

    attach(observer) {
        this.observers.push(observer);
        console.log('Subject.attach invoked');
    }

    dettach(observer) {
        console.log('Subject.dettach invoked');
        for (var i in this.observers) {
            if (this.observers[i] === observer) {
                this.observers.splice(i, 1);
            }
        }
    }

    notify() {
        console.log('Subject.notify invoked');
        for (var i in this.observers) {
            this.observers[i].update(this);
        }
    }
}

class ConcreteSubject extends Subject {
    constructor() {
        super();
        this.subjectState = null;
        this.observers = [];
        console.log('ConcreteSubject Class created');
    }

    getState() {
        console.log('ConcreteSubject.getState invoked');
        return this.subjectState;
    }

    setState(state) {
        console.log('ConcreteSubject.setState invoked');
        this.subjectState = state;
        this.notify();
    }
}

class Observer {
    constructor() {
        console.log('Observer Class created');
    }

    update() {
        console.log('Observer.update invoked');
    }
}

class ConcreteObserver extends Observer {
    constructor() {
        super();
        this.observerState = '';
        console.log('ConcreteObserver Class created');
    }

    update(Subject) {
        console.log('ConcreteObserver.update invoked');
        this.observerState = Subject.getState();
        console.log('Observer new state: ' + this.observerState);
    }
}

var observer1 = new ConcreteObserver();
var observer2 = new ConcreteObserver();
var subject = new ConcreteSubject();
subject.attach(observer1);
subject.attach(observer2);
subject.setState('state 1');