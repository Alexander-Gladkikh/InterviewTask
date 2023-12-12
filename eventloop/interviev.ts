// setTimeout(function timeout() {
//     console.log('Таймаут');
// },0);
//
// let p = new Promise(function (resolve, reject) {
//     console.log("Создание промиса");
//     resolve();
// });
//
// p.then(function () {
//     console.log('Обработка промиса');
// });
//
// console.log('Конец скрипта');

// ====================================================================

// type ArrayElement = {
//     label: string
//     id: number
//     des: string
//     test?: string
//   }
//
// const array: ArrayElement[] = [
//     { label: "label1", id: 1, des: "description"},
//     { label: "label2", id: 2, des: "description1"},
//     { label: "label3", id: 3, des: "description2"},
//     { label: "label4", id: 4, des: "description3"},
// ];
//
// const generateNewArrayByKey = <T>(array: Array<T>, key: keyof T) => {
//     return array.map((el) => {
//         return {[key]: el[key]}
//     })
// }
//
// console.log(generateNewArrayByKey(array, "dg"))
