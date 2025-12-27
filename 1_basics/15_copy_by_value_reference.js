/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive(원시) 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = "안녕하세요";
let clone = original;
console.log(original, clone);

clone += " 안유진 입니다.";
console.log(original, clone);

let originalObj = {
  name: "안유진",
  group: "아이브",
};
let cloneObj = originalObj;

originalObj["group"] = "코드팩토리";
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
originalObj = {
  name: "최지호",
  group: "코드팩토리",
};

cloneObj = {
  name: "최지호",
  group: "코드팩토리",
};
console.log(originalObj === cloneObj);

const yuJin1 = {
  name: "안유진",
  group: "아이브",
};

const yuJin2 = yuJin1;
const yuJin3 = {
  name: "안유진",
  group: "아이브",
};
// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
const yuJin4 = {
  ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);

const yuJin5 = {
  ...yuJin3,
  year: 2003,
};
console.log(yuJin5);

const yuJin6 = {
  ...yuJin3,
  name: "코드팩토리",
};
console.log(yuJin6);

const numbers = [1, 3, 5];
const numbers2 = [...numbers, 10];
console.log(numbers2);
