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
