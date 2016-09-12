'use strict';

class Context {
    constructor(input) {
        this.sum = 0;
        this.list = [];
        console.log('Context Class created');
    }

    add(eps) {
        console.log('Context.add invoked');
        this.list.push(eps);
    }

    getList() {
        console.log('Context.getList invoked');
        return this.list;
    }

    getSum() {
        console.log('Context.getSum invoked');
        return this.sum;
    }

    setSum(_sum) {
        this.sum = _sum;
        console.log('Context.setSum invoked');
    }
}

class AbstractExpression {
    constructor() {
        console.log('AbstractExpression Class created');
    }

    interpret(context) {
        console.log('AbstractExpression.interpret invoked');
    }
}

class PlusExpression extends AbstractExpression {
    constructor(name) {
        super();
        this.name = name;
        console.log('PlusExpression Class created');
    }

    interpret(context) {
        console.log('PlusExpression.interpret invoked');
        var sum = context.getSum();
        sum++;
        context.setSum(sum);
    }
}

class MinusExpression extends AbstractExpression {
    constructor() {
        super();
        this.name = '+';
        console.log('MinusExpression Class created');
    }

    interpret(context) {
        console.log('MinusExpression.interpret invoked');
        var sum = context.getSum();
        sum--;
        context.setSum(sum)
    }
}

var context = new Context();
context.setSum(20);

context.add(new PlusExpression());
context.add(new PlusExpression());
context.add(new PlusExpression());

context.add(new MinusExpression());
context.add(new MinusExpression());

var list = context.getList();
for (var i = 0; i < list.length; i++) {
    var expression = list[i];
    expression.interpret(context);
}

console.log("Result：" + context.getSum());