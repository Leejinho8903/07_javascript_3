// 생성자 오버라이딩

// Animal 클래스 선언
class Animal {

    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg만큼의 식사를 하고 ${this.weight}kg가 되었습니다.`);
    }

    move(lostWeight) {
        if(this.weight > lostWeight) this.weight -= lostWeight;
        console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg만큼 감량되어 ${this.weight}kg가 되었습니다.`);
    }

}

class Deer extends Animal {

    constructor(name, weight, legLength) {
        super(name, weight);
        this.legLength = legLength;
    }

    hide(place) {
        console.log(`${this.name}(은)는 ${place}에 숨습니다.`);
    }
}

let deer = new Deer('슬픈 눈망울의 사슴', 40, 1);
deer.hide('동굴 안');