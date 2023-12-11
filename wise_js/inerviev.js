
// Почему такая конструкция работает в js

// var a ='abs';
// var b = a.length;
//
// console.log(b)

// =======================================================================

// почему не работает

// var a = 'abs';
// a[0] = 'D';
//
// console.log(a) // Dbc

// =========================================================================

// const arr = [[1, 2, [3, 4]], [9], [10, 12]]

// console.log(arr.flat(Infinity).reduce((sum, next) => sum + next, 0))

// function flat(n) {
//     let res = []
//     n.forEach(item => {
//         if(Array.isArray(item)) {
//            res = res.concat(flat(item))
//             // res = [...res, flat(item)]
//         }
//         else {
//             res.push(item)
//         }
//     })
//     return res
// }
//
// console.log(flat(arr))

// ================================================================================

// Что будет в консоли, как исправить
// for (var i = 0; i < 100; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },0)
// }
//-------------------------------------------
// for (let i = 0; i < 100; i++) {
//     setTimeout(() => {
//         console.log(i)
//     },0)
// }
// ------------------------------------------------

// for (var i = 0; i < 100; i++) {
//     setTimeout((n) => {
//         console.log(n)
//     },0, i)
// }
// ----------------------------------------------------

// function fn(n) {
//     setTimeout(() => {
//         console.log(n)
//     }, 0)
// }
// for (var i = 0; i < 100; i++) {
//     fn(i)
// }
//--------------------------------------------------------
// for (var i = 0; i < 100; i++) {
//     (function(n) {
//         setTimeout(() => {
//             console.log(n)
//         }, 0)
//     })(i)
// }
// ===========================================================================
// Асинхронность

// console.log(1)
//
// const a = new Promise((resolve, reject) => resolve(console.log(2)))
//
// a.then(res => console.log(3))
//
// setTimeout(() => {
//     console.log(4)
// }, 0)
//
// console.log(5)
// ===========================================================================
// Написать запрос на сервер через xmlhttprequest и fetch
