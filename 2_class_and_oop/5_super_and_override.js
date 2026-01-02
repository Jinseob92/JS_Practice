/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // 노래 / 춤
  part;

  constructor(name, year, part) {
    super(name, year); // super은 부모의 constructor을 가져온다
    this.part = part;
  }
  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
    // super를 사용할 때 함수는 실행이 가능하다. 단, super.name 같이 작성할 경우
    // undefined를 반환한다.
    return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
  }
}

const yuJin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yuJin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
