'use strict';

class Singleton {
    constructor(data) {
        if (Singleton.prototype.Instance === undefined) {
            this.data = data;
            Singleton.prototype.Instance = this;
        }
        return Singleton.prototype.Instance;
    }
}

let ob1 = new Singleton("one");
let ob2 = new Singleton("two");
let ob3 = new Singleton("Three");
ob2.init = 'Object flg';

console.log(ob1 === ob2);
console.log(ob1 === ob3);

console.log(ob1);
console.log(ob2);
console.log(ob3);