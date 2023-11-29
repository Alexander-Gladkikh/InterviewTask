// function hey() {
//     console.log(this.age)
// }
// hey();

// let man = {
//     name: 'Alex',
//     hey(){
//         console.log(this.name);
//     }
// }
// man.hey();
// ----------------------------------------------

// var f = function() {
//     this.x = 5;
//     (function() {
//         this.x = 3;
//     })();
//     console.log(this.x);
// };
//
// var obj = {x: 4, m: function() {
//         console.log(this.x);
//     }};
//
//
// f();
// new f();
// obj.m();
// new obj.m();
// f.call(f);
// obj.m.call(f);

// var f = function() {
//     // Функция f вызывается с помощью простого вызова - f(),
//     // поэтому this ссылается на глобальный объект
//     this.x = 5; // window.x = 5;
//
//     // В пункте 1.1 также указано, что в самовызывающихся функциях this также ссылается на глобальный объект
//     (function () {
//         this.x = 3;  // window.x = 3
//     })();
//     console.log(this.x); // console.log(window.x)
// }
//
// f()

// var f = function() {
//     // Функция f вызывается с использованием ключевого слова new,
//     // поэтому this ссылается на создаваемый объект (обозначим его как object)
//     this.x = 5; // object.x = 5;
//
//     // В пункте 1.1 также указано, что в самовызывающихся функциях this ссылается на глобальный объект
//     (function () {
//         this.x = 3;  // window.x = 3
//     })();
//     console.log(this.x); // console.log(object.x)
// }
//
// new f()

// var obj = {x: 4,
//     m: function() {
//         // из пункта 1.3 следует, что this === obj,
//         console.log(this.x); // console.log(obj.x)
//     }
// };
//
// obj.m();

// var obj = {x: 4,
//     m: function() {
//         // из пункта 1.2 следует, что this ссылается на вновь создаваемый объект
//         // но внутри данной функции не устанавливается значение для this.x, поэтому результат - undefined
//         console.log(this.x);
//     }
// };
//
// new obj.m()

// var f = function() {
//     // Функция f вызывается с помощью метода call
//     // первым параметром в call указана сама функция (точнее объект) f, поэтому
//     // поэтому this ссылается на f
//     this.x = 5; // f.x = 5;
//
//     // В пункте 1.1 также указано, что в самовызывающихся функциях this ссылается на глобальный объект
//     (function() {
//         this.x = 3;  // window.x = 3
//     })();
//     console.log(this.x); // console.log(f.x)
// };
//
// f.call(f)
