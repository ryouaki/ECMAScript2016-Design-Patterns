'use strict';

class FlyweightFactory {
    constructor() {
        this.flyweights = {};
        console.log('FlyweightFactory Class created');
    }

    getFlyweight(key) {
        console.log('FlyweightFactory.getFlyweight invoked');
        if (this.flyweights[key]) {
            return this.flyweights[key];
        } else {
            this.flyweights[key] = new ConcreteFlyweight(key);
            return this.flyweights[key];
        }
    }

    createGibberish(keys) {
        console.log('FlyweightFactory.createGibberish invoked');
        return new UnsharedConcreteFlyweight(keys, this);
    }
}

class Flyweight {
    constructor() {
        console.log('Flyweight Class created');
    }

    operation(extrinsicState) {
        console.log('Flyweight.operation invoked');
    }
}

class ConcreteFlyweight extends Flyweight {
    constructor(key) {
        super();
        this.intrinsicState = key;
        console.log('ConcreteFlyweight Class created');
    }

    operation(extrinsicState) {
        console.log('ConcreteFlyweight.operation invoked');
        return extrinsicState + this.intrinsicState;
    }
}

class UnsharedConcreteFlyweight extends Flyweight {
    constructor(keys, flyweights) {
        super();
        this.flyweights = flyweights;
        this.keys = keys;
        console.log('UnsharedConcreteFlyweight Class created');
    }

    operation(extrinsicState) {
        console.log('UnsharedConcreteFlyweight.operation invoked');
        var key, word = '';
        for (var i = 0; i < extrinsicState; i++) {
            key = this.keys[Math.floor(Math.random() * (this.keys.length))];
            word = this.flyweights.getFlyweight(key).operation(word);
        }
        console.log('UnsharedConcreteFlyweight Operation: ');
        console.log(word);
    }
}


var flyweights = new FlyweightFactory();
var gibberish = flyweights.createGibberish(['-', '+', '*']);
gibberish.operation(5);