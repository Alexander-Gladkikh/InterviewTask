// Реалтзовать функцию, которая будет суммировать числа и выводить в логи

// function sum(n) {
//     console.log(n)
//     return function (a) {
//         return sum (a + n)
//     }
// }
//
// sum(5)(4)(11)

// ===========================================================================

// const obj1 = {
//     foo: 'foo',
//     bar: 'bar',
// }
// const obj2 = {
//     bar: 'foo',
//     some: 'some'
// }
//
// for(const key in obj1){
//    if(obj2.hasOwnProperty(key)) {
//        obj1[key] = obj2[key]
//    }
// }
//
// console.log(obj1)

// ======================================================================

// const gropBy = (arr, callbackFunction) => {
//     const result = {}
//     arr.forEach(item => {
//         let resultAfterCallback = callbackFunction(item)
//         result[resultAfterCallback]
//             ? result[resultAfterCallback].push(item)
//             : result[resultAfterCallback] = [item]
//     })
//     console.log(result)
// }
//
// gropBy([6.1, 4.2, 6.3], Math.floor)

// =================================================================

// const START = Date.now()
//
// function someFn() {
//     console.log('time', Date.now() - START)
//     console.log('args', arguments)
// }
//
// Function.prototype.delay = function (ms) {
//     return (...args) => {
//         setTimeout(() => {
//           this.call(this, ...args)
//         }, ms)
//     }
// }
//
// const f = someFn.delay(500)
//
// f('arg1', 'arg2', 1, 2)
//  ==========================================================================

const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c : [
                            {
                                v: 9
                            }
                        ]
                    }
                ]
            },
            {
                v: 11,
                c:  [
                    {
                        v: 9
                    }
                ]
            }
        ]
    }
]

// const recursive = (tree) => {
//     let sum = 0;
//     tree.forEach(node => {
//         sum += node.v
//         if (!node.c) {
//            return node.v
//         }
//         sum += recursive(node.c)
//     })
//     return sum;
// }

// console.log(recursive(tree))

// const iteration = (tree) => {
//     if(!tree.length) {
//         return 0
//     }
//     const stack = []
//     let sum = 0
//     tree.forEach( node => {
//         stack.push(node)
//     })
//     while (stack.length) {
//         const node = stack.pop();
//         sum += node.v
//         if(node.c) {
//             node.c.forEach(n => {
//                 stack.push(n)
//             })
//         }
//     }
//     return sum
// }
//
// console.log(iteration(tree))
// ===========================================================

// let obj1 = { name: 'ulbi tv' };
// let obj2 = obj1;
// obj1 = { name: 'UPDATED' }
// obj1.name = 'Updated'

// console.log(obj2)

// ====================================================================

// function checkBrackets(str) {
//     const stack = [];
//
//     for(let i = 0; i < str.length; i++) {
//         const bracket = str[i];
//         if (bracket === '(') {
//             stack.push(bracket);
//         }
//         else {
//             const lastEl = stack.pop();
//             if(!lastEl) {
//                 return false
//             }
//         }
//     }
//     return !stack.length;
// }

// console.log(checkBrackets('((())))'))

// =================================================================
// избавиться от дубликатов
const arr = [1,1,2,3,4,4,5,6,6,7,7,8,9]

// function withoutRepeat(arr) {
//     const uniqueValue = [];
//
//     for(let i = 0; i< arr.length; i++) {
//         const currentItem = arr[i];
//         let count = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (currentItem === arr[j]){
//                 count++
//             }
//         }
//         if( count === 1) {
//             uniqueValue.push(currentItem)
//         }
//     }
//     return uniqueValue
// }

// console.log(withoutRepeat(arr))

// function withoutRepeat(arr) {
//     const uniqueValue = [];
//     const obj = {};
//
//     for(let i = 0; i< arr.length; i++) {
//         const currentItem = arr[i];
//         if(!(currentItem in obj)) {
//             obj[currentItem] = 1;
//         }
//         else {
//             obj[currentItem] += 1;
//         }
//     }
//
//     const keys = Object.keys(obj);
//     keys.forEach(key => {
//         if(obj[key] === 1) {
//             uniqueValue.push(key)
//         }
//     })
//     return uniqueValue
// }

// console.log(withoutRepeat(arr))

// ==============================================================

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// const user = new User ('Ulbi', 21)
// console.log(user)

// ===================================================
