// let a;
// let p4 = new Promise(function (resolve) { console.log('TEST A1', a);
//     a = 25;
//     setTimeout(() => {
//         console.log('TEST A2', a);
//         resolve(a)
//     }, 100)})
//     setTimeout(function timeout() {
//         a = 10;
//         console.log('TEST A3', a)
//     }, 100);
//     p4.then(function (b) {
//         console.log('TEST A4', a)
//     })
//       console.log('TEST A5', a);



// setTimeout(() => {
//     console.log('timeout')
// }, 0);
//
// const p = new Promise((resolve, reject) => {
//     console.log('Promise creation');
//     resolve()
// })
//
// const p2 = new Promise((resolve, reject) => {
//     console.log(123)
// })
//
// p.then(() => {
//     console.log('Promise resolving');
// })
//
// console.log('End')
//
// console.log('p2 =>>', p2)

//
// console.log('script start');
//
//
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0);
//
//
// Promise
//     .resolve()
//     .then(function() {
//         console.log('promise1');
//     })
//     .then(function() {
//         console.log('promise2');
//     });
//
//
// console.log('script end')

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');
