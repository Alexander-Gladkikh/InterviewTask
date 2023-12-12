// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(a) {
//     return (b) => a + b;
// }
// console.log(sum(3)(6));

// ========================================================================================

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0;
//     return function() {
//         count = count + 1;
//         console.log(count)
//     }
// }
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// ============================================================================

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

//  function makeCounter(start) {
//     let count = start;
//
//      this.increase = function () {
//         return count += 1
//     }
//      this.decrease = function () {
//         return count -= 1
//      }
//      this.reset = function () {
//          return count = 0
//      }
//      this.set = function  (value) {
//          return count = value
//      }
// }
//
// const counter = new makeCounter(9)
// console.log(counter.increase())
// console.log(counter.decrease())
// console.log(counter.reset())
// console.log(counter.set(100))

// =====================================================================================






