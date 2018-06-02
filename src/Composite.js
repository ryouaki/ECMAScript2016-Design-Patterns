'use strict';

class Component {
    constructor() {
        console.log('Component Class created');
    }

    operation() {
        console.log('Component.operation invoked');
    }

    add(Component) {
        console.log('Component.add invoked');
    }

    remove(Component) {
        console.log('Component.remove invoked');
    }

    getChild(key) {
        console.log('Component.getChild invoked');
    }
}

class Leaf extends Component {
    constructor(name) {
        super();
        this.name = name;
        console.log('Leaf Class created');
    }

    operation() {
        console.log('Leaf.operation invoked');
        console.log(this.name);
    }
}

class Composite extends Component {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
        console.log('Composite Class created');
    }

    operation() {
        console.log('Composite operation for: ' + this.name)
        for (var i in this.children) {
            this.children[i].operation();
        }
    }

    add(Component) {
        console.log('Composite.add invoked');
        this.children.push(Component);
    }

    remove(Component) {
        console.log('Composite.remove invoked');
        for (var i in this.children) {
            if (this.children[i] === Component) {
                this.children.splice(i, 1);
            }
        }
    }

    getChild(key) {
        console.log('Composite.getChild invoked');
        return this.children[key];
    }
}

var composite1 = new Composite('C1');
composite1.add(new Leaf('L1'));
composite1.add(new Leaf('L2'));
var composite2 = new Composite('C2');
composite2.add(composite1);
composite1.getChild(1).operation();
composite2.operation();