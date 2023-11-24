//1
// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.reject(3).catch(console.log);
//
// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));
//
// Promise.resolve(5).then(console.log);
//
// console.log(6);
//
// setTimeout(() => console.log(7),0);

//2

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
//
// setTimeout(() => console.log('in setTimeout1'), 1000);
// myPromise(1000).then(res => console.log('in Promise 1'));
// setTimeout(() => console.log('in setTimeout2'), 100);
// myPromise(2000).then(res => console.log('in Promise 2'));
// setTimeout(() => console.log('in setTimeout3'), 2000);
// myPromise(1000).then(res => console.log('in Promise 3'));
// setTimeout(() => console.log('in setTimeout4'), 1000);
// myPromise(5000).then(res => console.log('in Promise '));
