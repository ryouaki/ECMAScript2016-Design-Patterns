'use strict';

class Iterator {
    constructor() {
        console.log('Iterator Class created');
    }

    first() {
        console.log('Iterator.first invoked');
    }

    next() {
        console.log('Iterator.next invoked');
    }

    isDone() {
        console.log('Iterator.isDone invoked');
    }

    currentItem() {
        console.log('Iterator.currentItem invoked');
    }
}

class ConcreteIterator extends Iterator {
    constructor(aggregate) {
        super();
        this.index = 0;
        this.aggregate = aggregate;
        console.log('ConcreteIterator Class created');
    }

    first() {
        console.log('ConcreteIterator.first invoked');
        return this.aggregate.list[0];
    }

    next() {
        console.log('ConcreteIterator.next invoked');
        this.index += 1;
        return this.aggregate.list[this.index];
    }

    currentItem() {
        console.log('ConcreteIterator.currentItem invoked');
        return this.aggregate.list[this.index];
    }
}

class Aggregate {
    constructor() {
        console.log('Aggregate Class created');
    }

    createIterator() {
        console.log('Aggregate.CreateIterator invoked');
    }
}

class ConcreteAggregate extends Aggregate {
    constructor(list) {
        super();
        this.list = list;
        console.log('ConcreteAggregate Class created');
    }

    createIterator() {
        console.log('ConcreteAggregate.CreateIterator invoked');
        this.iterator = new ConcreteIterator(this);
    }
}

var aggregate = new ConcreteAggregate([0, 1, 2, 3, 4, 5, 6, 7]);
aggregate.createIterator();
console.log(aggregate.iterator.first());
console.log(aggregate.iterator.next());
console.log(aggregate.iterator.currentItem());