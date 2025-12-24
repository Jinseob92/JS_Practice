/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 *10/ 2 %3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
  console.log((((2 * 10) / 2) % 3).toString());
}

// calculate();

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

calculate(4);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 *
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}
multiply(2, 4);

//  default parameter -> 인수를 전달받지 못했을 때, 사용할
// 기본 값을 지정할 수 있다.
function multiply(x, y = 10) {
  console.log(x * y);
}
multiply(2);

/**
 * 반환받기
 * return 받기
 */
console.log("==========");
function multiply(x, y) {
  return 2 * 4;
}

const result1 = multiply(2, 4);
console.log(result1);
const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7))

function multiply6 (x){
  return function(y){
    return function(z){
      return `x: ${x} y: ${y} z:${z}`;
    }
  }
}
console.log(multiply6(3)(4)(5))

const multiplyTwo = function(x,y){
  return x*y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
  console.log(arguments)
  return x * y* z;
}
console.log('-------------')
console.log(multiplyThree(4,5,6))

const multiplyAll = function(...nums){
  return Object.values(nums).reduce((a,b)=> a*b,1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));

// immediately invoked function -> 즉시 실행 함수
(function (x,y){
  console.log(x*y);
})(4,5)

console.log(typeof multiply);
// 좌측에 있는 변수가 오른쪽에 있는 Type과 동일한가?
// 물어보는 instanceof
console.log(multiply instanceof Object);