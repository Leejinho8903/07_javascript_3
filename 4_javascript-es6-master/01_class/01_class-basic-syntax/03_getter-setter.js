// getter, setter
class Product {

    constructor(name, price) {
        // setter 메소드를 호출한다.
        this.name = name;
        this.price = price;
    }

    /* name, price라는 값으로 외부 접근하고 (getter, setter 호출 된다)
       getter, setter 내부에서는 _name, _price로 실제 값에 접근한다. */

    // getter 함수
    get name() {
        console.log('get name 동작');
        return this._name;
        // this.name이라고 작성하면 name의 getter를 호출하게 되어 stack over flow가 일어난다.
    }

    get price() {
        console.log('get price 동작');
        return this._price;
    }
    // setter 함수
    set name(value) {
        console.log('set name 동작');
        this._name = value;
        // this.name이라고 작성하면 name의 setter를 호출하게 되어 stack over flow가 일어난다.
    }

    set price(value) {
        console.log('set price 동작');
        if(value <= 0) {
            console.log('가격은 음수일 수 없습니다.');
            this._price = 0;
            return;
        }
        this._price = value;
    }

}

let phone = new Product('전화기', 23000);
console.log(phone.name, phone.price);

let computer = new Product('컴퓨터', -1500000);
console.log(computer.name, computer.price);