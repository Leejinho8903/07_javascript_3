// 클래스 기본 문법
// 동일한 종류의 객체를 여러 개 생성해야 하는 경우 객체 리터럴을 여러 개 생성하기 보다
// 클래스 문법을 통해 동일한 종류의 객체를 재생성 할 수 있다.

new Teacher("유관순");
// new Student("홍길동"); -> ReferenceError: Cannot access 'Student' before initialization

// 01. 클래스 선언
class Student {

    // 생성자를 통해 인스턴스 생성 및 초기화
    // 생성자는 1개 이상 정의 될 수 없으며 생략할 경우 암묵적으로 정의 된다.
    constructor(name){
        this.group = 1;     // 고정 값으로 인스턴스 초기화
        this.name = name;   // 전달 받은 값으로 인스턴스 초기화
    }

    // 프로토타입 메소드
    introduce() {
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name}입니다.`);
    }

    // 암묵적으로 this를 반환하므로 반환문은 작성하지 않는다.
}

let student = new Student("홍길동");         // 초기값 전달하며 생성
student.introduce();                        // 메소드 호출

// 클래스 문법과 유사하게 기능하는 것처럼 보이는 생성자 함수를 사용할 수도 있다.
function Teacher(name) {
    this.group = 1;
    this.name = name;
}

Teacher.prototype.introduce = function () {
    console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name}입니다.`);
};

let teacher = new Teacher("유관순");
teacher.introduce();

/* 생성자 함수와 클래스 문법의 차이점?
1. 클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생한다. */
Teacher("유관순");
// Student("홍길동"); -> TypeError: Class constructor Student cannot be invoked without 'new'

/* 
2. 클래스에 정의 된 메소드는 열거 불가 (for..in 순회 시 제외 된다)
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작
4. 클래스는 항상 use strict 적용
 */