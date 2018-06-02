'use strict';

class Facade {
    constructor() {
        console.log("Facade class created");
    }

    gotoPage(dp) {
        switch (dp) {
            case "Facade":
                console.log("This is the Facade");
                break;
            case "AbstractFactory":
                console.log("This is the AbstractFactory");
                break;
            case "Builder":
                console.log("This is the Builder");
                break;
            case "Factory":
                console.log("This is the Factory");
                break;
            case "Prototype":
                console.log("This is the Prototype");
                break;
            case "Singleton":
                console.log("This is the Singleton");
                break;
            case "Adapter":
                console.log("This is the Adapter");
                break;
            case "Bridge":
                console.log("This is the Bridge");
                break;
            case "Composite":
                console.log("This is the Composite");
                break;
            case "Decorator":
                console.log("This is the Decorator");
                break;
            case "Flyweight":
                console.log("This is the Flyweight");
                break;
            case "Proxy":
                console.log("This is the Proxy");
                break;
            case "ChainofResponsibility":
                console.log("This is the ChainofResponsibility");
                break;
            case "Command":
                console.log("This is the Command");
                break;
            case "Interpreter":
                console.log("This is the Interpreter");
                break;
            case "Iterator":
                console.log("This is the Iterator");
                break;
            case "Mediator":
                console.log("This is the Mediator");
                break;
            case "Memento":
                console.log("This is the Memento");
                break;
            case "Observer":
                console.log("This is the Observer");
                break;
            case "State":
                console.log("This is the State");
                break;
            case "Strategy":
                console.log("This is the Strategy");
                break;
            case "TemplateMethod":
                console.log("This is the TemplateMethod");
                break;
            case "Visitor":
                console.log("This is the Visitor");
                break;
            default:
                console.log("nothing to be matched");
        }
    }
}

let facade = new Facade();
facade.gotoPage('Facade');
facade.gotoPage('AbstractFactory');
facade.gotoPage('Builder');
facade.gotoPage('Factory');
facade.gotoPage('Prototype');
facade.gotoPage('Singleton');
facade.gotoPage('Adapter');
facade.gotoPage('Bridge');
facade.gotoPage('Composite');
facade.gotoPage('Decorator');
facade.gotoPage('Flyweight');
facade.gotoPage('Proxy');
facade.gotoPage('ChainofResponsibility');
facade.gotoPage('Command');
facade.gotoPage('Interpreter');
facade.gotoPage('Iterator');
facade.gotoPage('Mediator');
facade.gotoPage('Memento');
facade.gotoPage('Observer');
facade.gotoPage('State');
facade.gotoPage('Strategy');
facade.gotoPage('TemplateMethod');
facade.gotoPage('Visitor');