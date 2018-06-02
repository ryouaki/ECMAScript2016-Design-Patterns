'use strict';

class Target {
    constructor(type) {
        console.log('Target Class created!');
        let result = undefined;

        switch (type) {
            case 'adapter':
                result = new AdapterImpl();
                break
            default:
                result = undefined;
        }
        return result;
    }

    request() {
        console.log('Target.request invoked');
    }
}

class Adapter {
    constructor() {
        console.log('Adapter Class created');
    }

    specificRequest() {
        console.log('Adapter.specificRequest invoked');
    }
}

class AdapterImpl extends Adapter {
    constructor() {
        super()
        console.log('AdapterImpl Class created');
    }

    request() {
        console.log('AdapterImpl.request invoked');
        return this.specificRequest();
    }
}

var f = new Target("adapter");
f.request();
