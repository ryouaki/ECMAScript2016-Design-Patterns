'use strict';

class Originator {
    constructor() {
        console.log('Originator Class created');
        this.state = 'a';
        console.log('Originator created. State= ' + this.state);
    }

    setMemento(Memento) {
        console.log('Originator.setMemento invoked');
        this.state = Memento.getState();
        console.log('Originator.setMemento State= ' + this.state);
    }

    createMemento(state) {
        console.log('Originator.createMemento invoked');
        return new Memento(state);
    }
}

class Memento {
    constructor(state) {
        console.log('Memento Class created');
        this.state = state;
        console.log('Memento created. State= ' + this.state);
    }

    getState() {
        console.log('Memento.getState invoked');
        return this.state;
    }

    setState(state) {
        console.log('Memento.setState invoked');
        this.state = state;
    }
}

class Caretaker {
    constructor() {
        console.log('Caretaker Class created');
        this.mementos = [];
    }

    addMemento(memento) {
        console.log('Caretaker.addMemento invoked');
        this.mementos.push(memento)
    }

    setMemento() {
        console.log('Caretaker.setMemento invoked');
        return this.mementos[this.mementos.length - 1]
    }
}

let caretaker = new Caretaker();
let originator = new Originator();
caretaker.addMemento(originator.createMemento('b'));
originator.setMemento(caretaker.setMemento());
console.log(originator.state);