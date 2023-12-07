// Сумма элементов массива

// const array = [1, 2, 3, 4, 4, 5, 9];

//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//
// console.log(result)
//-------------------------------------------------------------------------------------

// console.log(array.reduce((acc, next, 0) => acc + next))
//-----------------------------------------------------------------------------------------

// console.log(eval(array.join('+')))

//===========================================================================================

// Максимальный или минимальный элемент массива

// const array = [1, 2, 3, 4, 4, 65, 5, 9];

// let max = array[0]
//
// for (let i = 1; i < array.length; i++) {
//     if(array[i] > max) {
//         max = array[i]
//     }
// }
// console.log(max)
//-----------------------------------------------------------------------------------

// let max = array.reduce((acc, next) => Math.max(acc, next))
// console.log(max)
//---------------------------------------------------------------------------------

// let newArray = array.sort((a,b) => a - b)
// let max = newArray[newArray.length - 1];
// console.log(max)
//------------------------------------------------------------------------------------
// let max = Math.max(...array)
// console.log(max)
// es-5
// let max = Math.max.apply(null, array)
// console.log(max)

// ================================================================================
// Сорторовка массива объектов
// const users = [
//     {
//         name: 'John Doe',
//         age: 20
//     },
//     {
//         name: 'Alex Moren',
//         age: 30
//     },
//     {
//         name: 'Jane Doe',
//         age: 25
//     },
// ]
//
// users.sort((u1, u2) => {
//     return u1.name.localeCompare(u2.name)
// })
//
// console.log(users)

// =========================================================================================
// Развернуть массив

// const array = [1, 2, 3, 4, 4, 65, 5, 9];

// console.log(array.reverse())
//--------------------------------------------------------------------------------------------

// let result = []
// for(let i = array.length - 1; i >= 0; i--) {
//     result.push(array[i])
// }
// console.log(result)
// ------------------------------------------------------------------------------------------

// let result = []
//
// array.forEach(el => result.unshift(el))
// console.log(result)
// --------------------------------------------------------------------------------

// console.log(array.reduce((acc, item) => [item].concat(acc), []))
// console.log(array.reduceRight((acc, item) => [...acc, item], []))

// ----------------------------------------------------------------------------------

// console.log(array.map((el, index) => array[array.length - 1 - index]))
//---------------------------------------------------------------------------------
// console.log([...array].map([].pop, array))
// let reversed = [...array].map([].pop, array)
// console.log(reversed)
// ========================================================================================
