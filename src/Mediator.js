'use strict';

class Mediator {
    constructor() {
        console.log('Mediator Class created');
    }

    colleagueChanged(colleague) {
        console.log('Mediator.colleagueChanged invoked');
    }
}

class ConcreteMediator extends Mediator {
    constructor() {
        super();
        console.log('ConcreteMediator Class created');
        this.colleague1 = new ConcreteColleague1(this);
        this.colleague2 = new ConcreteColleague2(this);
    }

    colleagueChanged(colleague) {
        console.log('ConcreteMediator.colleagueChanged invoked');
        switch (colleague) {
            case this.colleague1:
                console.log('ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ');
                this.colleague2.setFeature('new feature 2');
                break
            case this.colleague2:
                console.log('ConcreteColleague2 has Changed, but do nothing');
                break
            default:
                console.log('Do nothing');
        }
    }
}

class Colleague {
    constructor() {
        console.log('Colleague Class created');
    }

    changed() {
        console.log('Colleague.changed invoked');
        this.mediator.colleagueChanged(this);
    }
}

class ConcreteColleague1 extends Colleague {
    constructor(mediator) {
        super();
        console.log('ConcreteColleague1 Class created');
        this.mediator = mediator;
        this.feature = "feature 1";
    }

    setFeature(feature) {
        console.log('ConcreteColleague1.setFeature invoked');
        console.log('ConcreteColleague1 Feature has changed from ' + this.feature + ' to ' + feature)
        this.feature = feature;
        this.changed();
    }
}

class ConcreteColleague2 extends Colleague {
    constructor(mediator) {
        super();
        console.log('ConcreteColleague2 Class created');
        this.mediator = mediator;
        this.feature = "feature 2";
    }

    setFeature(feature) {
        console.log('ConcreteColleague2.setFeature invoked');
        console.log('ConcreteColleague2 Feature has changed from ' + this.feature + ' to ' + feature);
        this.feature = feature;
        this.changed();
    }
}

var mediator = new ConcreteMediator();
mediator.colleague1.setFeature("new feature 1");