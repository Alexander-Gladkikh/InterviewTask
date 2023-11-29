// console.log(1)
//
// setTimeout(() => {
//     console.log(2)
// })
//
// Promise.resolve().then(() => console.log('micro'))
// Promise.resolve().then(() => console.log('micro1'))
// Promise.resolve().then(() => console.log('micro2'))
//
// const p = new Promise((res) => {
//     console.log(3)
//     setTimeout(() => {
//         console.log(4)
//         res()
//     })
// })
//
// setTimeout(() => {
//     console.log(5)
// })
//
// p.then(() => {
//     console.log(6)
// }).then(() => {
//     console.log(7)
// })
//
// console.log(8)

//
// Promise.reject('a') //
//     .then(p=>p+'1',p=>p+'2') //
//     .catch(p=>p+'b') //
//     .catch(p=>p+'с') //
//     .then(p=>p+'d1') //
//     .then('d2') //
//     .then(p=>p+'d3') //
//     .finally(p=>p+'e') //
//     .then(p=>console.log(p)) // ?


