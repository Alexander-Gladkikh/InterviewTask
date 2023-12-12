// let name = "John";
//
// function sayHi() {
//     console.log(("Hi, " + name));
// }
//
// name = "Pete";
//
// sayHi(); // что будет показано: "John" или "Pete"?

// =================================================

// function makeWorker() {
//     // let name = "Pete";
//
//     return function() {
//         console.log((name));
//     };
// }
//
// let name = "John";
//
// // создаём функцию
// let work = makeWorker();
//
// // вызываем её
// work(); // что будет показано?
// =================================================================

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// console.log(( counter() )); // ?
// console.log(( counter() )); // ?
//
// console.log(( counter2() )); // ?
// console.log(( counter2() )); // ?

// ================================================

// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         console.log((`${phrase}, ${user}`));
//     }
// }
//
// sayHi();
// ======================================================

// Что выведет такой код

// let x = 1;
//
// function func() {
//     console.log(x); // ?
//
//     let x = 2;
// }
//
// func();
// ======================================================
// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// function inBetween (a,b) {
//     return function (elem) {
//        return elem >= a && elem <= b
//     }
// }
//
// function inArray(arr) {
//     return function (elem) {
//         return arr.includes(elem)
//     }
// }
//
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
// ==============================================================

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField (value) {
//     return function (a, b) {
//         return a[value] > b[value] ? 1 : -1
//     }
// }

// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// console.log(users)
// console.log(users.sort(byField('name')));
// console.log(users.sort(byField('age')));
