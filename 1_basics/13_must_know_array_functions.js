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
/**
 * concat()은 기존 array에 추가하는 것이 아닌
 * 새로운 array를 만들어 반환한다.
 */
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers); // 기존 array 출력시 코드팩토리는 추가되지 않음 (주의)

// slice()
/**
 * slice()도 새로운 array를 만들어 반환한다.
 */
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = {
  ...iveMembers,
};
console.log(iveMembers2);
console.log("--------------");
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
console.log(iveMembers2 === iveMembers);

// join()
// join()은 모든 값들을 구분지어 나눌 수 있게 한다.
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

// reverse() - 반대로 정렬
console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];

// sort() - 오름차순, 내림차순 공식
console.log(numbers);
// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => {
  a > b ? -1 : 1;
});
console.log(numbers);
console.log("--------------");

// map()
console.log(
  iveMembers.map((x) => {
    x;
  })
);
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브 : ${x}`;
    } else {
      return x;
    }
  })
);

console.log(iveMembers);

// filter() - 조건에 맞는 여러개의 값을 반환
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

// find() - 조건에 맞는 첫번째로 해당하는 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
console.log(iveMembers.reduce((a, b) => a + b.length, 0));
