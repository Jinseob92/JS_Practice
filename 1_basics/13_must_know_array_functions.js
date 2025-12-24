/**
 * Array Functions
 */
let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
console.log(iveMembers.push("코드팩토리"));
console.log(iveMembers);

// pop() -> 제일 뒤 index를 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("---------------");

// shift() -> 제일 앞 index를 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift() -> 제일 앞 index에 값 추가
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

console.log("----------------");
// splice() -> 첫번째 parameter는 시작 index
//          -> 두번째 parameter는 시작index부터 몇개를 삭제할 것인지 Count
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// concat()
