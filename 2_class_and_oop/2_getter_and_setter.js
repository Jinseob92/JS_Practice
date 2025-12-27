/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  /**
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}
const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);
yuJin.setName = "장원영";
console.log(yuJin);

class IdolModel2 {
  #name; // private한 값을 사용할 때 #을 붙이면 외부에서 접근이 불허하다. ES7에서 새로나온 문법
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }
  get name() {
    // getter을 사용하여 private한 값에 접근가능하다.
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);
