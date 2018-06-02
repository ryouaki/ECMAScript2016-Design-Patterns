'use strict';

class Subject {
    constructor() {
        console.log('Subject Class created');
    }

    request() {
        console.log('Subject.request invoked');
    }
}

class RealSubject extends Subject {
    constructor() {
        super()
        console.log('RealSubject Class created');
    }

    request() {
        console.log('RealSubject.request invoked');
    }
}

class Proxy extends Subject {
    constructor() {
        super()
        console.log('Proxy Class created');
    }

    request() {
        this.realSubject = new RealSubject();
        this.realSubject.request();
    }
}

var proxy = new Proxy()
proxy.request()