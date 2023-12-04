// var a = 50
// function f() {
//     a = 100
//     let b = 150
// }
//
// if (true) {
//     a = 175
//     let c = 200
//     var d = 300
//     const e = 400
// }
// f()
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// ====================================================
// Какие ключи будут заполнены у pet1
//
// function Animal(size, type) {
//     this.type = type || 'Animal';
//     this.canTalk = false
// }
// Animal.prototype.speak = function() {
//     if(this.canTalk) {
//         console.log('It spoke')
//     }
// }
//
// let Pet = function (size, type, name, owner) {
//     Animal.call(this, size, type);
//     this.size = size;
//     this.name = name;
//     this.owner = owner;
// }
//
// Pet.prototype = Object.create(Animal.prototype);
// let pet1 = new Pet()
// console.log(pet1)

// ===========================================================

// function getAvaliabilityMessage(item) {
//     if(getAvailability(item)) {
//         var msg = 'Username avaliable';
//     }
//     return msg
// }
//
// function getAvailability(name) {
//     return name === 'Eugene';
// }
//
// console.log('geyweh', getAvaliabilityMessage('newUserNAme'))

// ===================================================================

// const entries = [];
// entries.push('a');
// entries.push('b');
// entries.push('c');
// console.log(entries.push('l'))

// =========================================================================

// const entries = ['a', 1, true];
// console.log(entries instanceof Array)

// ============================================================================
// const priority = [1, 2, 3];
// const priority100 = Array.from(
//     priority,
//     function (p) {
//         return p * 10 + this.addjustment;
//     },
//     //context for function
//                 {addjustment: 100}
// );
//
// console.log(priority100)

// ========================================================================

// const ratings = [1, 2, 3, 4, 5];
// const result = ratings.reduce((start, next, index, array) => start * next)
// console.log(result)

// ================================================================
//
// const priority = [,,];
// for (const item of priority) {
//     console.log(item)
// }

// =======================================================
//
// const entries = ['a', 'b', 'c'];
// const newEntries = entries.concat(['d', 'e', 'f'], 'g', 'h');
// console.log(newEntries.length)
// ==========================================================
//  concat работает быстрее spred

// Но если массивоподобный объект имеет специальное свойство Symbol.isConcatSpreadable, то он обрабатывается как массив,
// с помощью concat: вместо него добавляются его элементы:
// let arr = [1, 2];
//
// let arrayLike = {
//     0: "что-то",
//     1: "ещё",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };
//
// console.log(( arr.concat(arrayLike) )); // 1,2,что-то,ещё
// =============================================================================

// let task = { isDone: false };
// console.log( Object.prototype.isPrototypeOf(task))

// ===============================================================================

// let task1 = { id: 1 };
// let task2 = { id: 2, priority: 100 };
// let target = {};
// Object.assign(target, task1, task2);
// console.log(target)

// отличие от spred в том что spred удаляет цепочку прототипов

// ========================================================================

// "use strict"
// let task = { id: 1 };
// Object.freeze(task);
// task.id = 2;
// task.action = 'Create';
// Object.defineProperties(task, 'priority', {value: 'High'})
// console.log(task)

// ===========================================================================

// class Task {
//     constructor(id = 2) {
//         console.log('Constructing Task')
//         this.taskId = id;
//     }
//     showId() {
//         console.log(this.taskId)
//     }
// }
//
// let task = new Task();
// task.showId()

// ===============================================================================

// class Task {
//     constructor() {
//         console.log('Constructing Task');
//     }
// }
//
// class UrgentTask extends Task {
//     constructor() {
//         this.action = 'Urgent Task'
//         super();
//         console.log(this.action)
//     }
// }
//
// let task = new UrgentTask();

// ============================================================================

// let Task  = function (action) {
//     this.action = action;
//     this.done = false;
//     this.complete = function() {
//         this.done = true;
//     }
// }
// let task1 = new Task('create');
// let task2 = new Task('delete');
// console.log(task1.complete === task2.complete)

// =============================================================

// let squareFunc = function square(x, y) {
//     console.log(x * y);
// }
// square(2,3)

// ========================================================
// function square(x, y) {
//     console.log( x * y );
// }
// let v = square(2,3);
// console.log(v)

// =========================================================

// var callback = function(x) {
//     console.log(x)
// }
// var callAClosure = function(clousure) {
//     clousure(10)
// }
// callAClosure(callback)

// ==============================================================
// var x = 10;
// var capturedClosure = function() {
//     console.log(x);
// };
// (function() {
//     x = x*x
// })()
// capturedClosure()
