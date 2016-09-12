'use strict';

class Invoker {
    constructor() {
        console.log('Invoker Class created');
    }

    storeCommand(command) {
        this.command = command;
        console.log('Invoker.storeCommand invoked');
    }
}

class Command {
    constructor() {
        console.log('Command Class created');
    }

    execute() {
        console.log('Command.execute invoked');
    }
}

class ConcreteCommand extends Command {
    constructor(receiver, state) {
        super();
        this.receiver = receiver;
        console.log('ConcreteCommand Class created');
    }

    execute() {
        console.log('ConcreteCommand.execute invoked');
        this.receiver.action();
    }
}

class Receiver {
    constructor() {
        console.log('Receiver Class created');
    }

    action() {
        console.log('Receiver.action invoked');
    }
}

var invoker = new Invoker();
var receiver = new Receiver();
var command = new ConcreteCommand(receiver);
invoker.storeCommand(command);
invoker.command.execute();