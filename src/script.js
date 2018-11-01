'use strict';

class Currency {
    constructor(quantity = 1, ratioWithProto = 1, sign = "$") {
        this.quantity = quantity;
        this.ratioWithProto = ratioWithProto;
        this.sign = sign;
    }

    // геттер
    sum(slag) {
        return this.quantity * this.ratioWithProto + slag.quantity * slag.ratioWithProto;
    }

    isCurrencyType() {
        return this instanceof Сurrency;
    }

};
console.log(Currency);
class Dollar extends Currency {
    constructor() {
        super(quantity, ratioWithProto, sign);
        Dollar.count += 1;
        this._quantity = quantity;
    }
    get quantity() {
            return `${this._quantity,this.sigh}`;
        }
        // static count() {
        // return this.count;
        // }
}


Dollar.count = 0;
console.log(Dollar);
console.log(Dollar.count);
class Canadian extends Currency {
    constructor() {
        super(quantity, 1.2, sign);
    }
}
console.log();
class Hryvna extends Currency {
    constructor() {
        super(quantity, 0.65, sign);
    }
}
console.log(Hryvna);
let dol = new Dollar(10);
console.log(dol.quantity);
let dcan = new Canadian(20);
console.log(dcan);
console.log(dol.sum);
let summa = dol.sum + dcan.sum;
console.log(summa);
